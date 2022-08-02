import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { PostData } from '../types'

export const getPosts = (
  directory: string,
  pageIndex: number,
  mostRecent = true
): PostData[] => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), directory), {
    withFileTypes: true
  })

  const posts = dirFiles
    .map(file => {
      if (!file.name.endsWith('.mdx')) return

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), directory, file.name),
        'utf-8'
      )
      const { data, content } = matter(fileContent, {
        // Setting to make sure it doesn't convert date-strings to non-serializable Date objects
        engines: {
          // Ignore unknown type error
          // @ts-ignore
          yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA })
        }
      })

      const slug = file.name.replace(/.mdx$/, '')
      return { data, content, slug }
    })
    // Filter any undefined objects and draft posts
    .filter(post => post !== undefined && !post.data.draft)

  // Sort by date (most recent)
  posts.sort((postA, postB) => {
    const a: Date = new Date((postA as PostData).data.publishDate)
    const b: Date = new Date((postB as PostData).data.publishDate)

    if (mostRecent) {
      return b.valueOf() - a.valueOf()
    }

    return a.valueOf() - b.valueOf()
  })

  // @ts-ignore
  return filterPostsByPageIndex(posts, pageIndex)
}

const filterPostsByPageIndex = (posts: PostData[], pageIndex: number) => {
  const postPerPage = 5
  // get the total posts from page 1 to current page
  const totalPagePosts = +pageIndex * postPerPage

  // get the total posts from page 1 to previous page
  const prevPagePosts = totalPagePosts - postPerPage

  return posts.filter(
    (_post, index) => index < totalPagePosts && index >= prevPagePosts
  )
}
