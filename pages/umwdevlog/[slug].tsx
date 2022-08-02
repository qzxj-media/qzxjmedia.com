import { GetStaticProps, NextPage } from 'next/types'
import Layout from '../../components/layouts/post'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { FrontMatterProps } from '../../lib/types'
import components from '../../components/devlog-mdx-components'
import { formatDateString } from '../../lib/date-utils'
import MyDivider from '../../components/my-divider'
import { tagsToString } from '../../lib/tag-utils'

interface DevlogPostProps {
  frontMatter: FrontMatterProps
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >
}

const DevlogPost: NextPage<DevlogPostProps> = ({
  frontMatter: { title, excerpt, author, publishDate, tags },
  mdxSource
}) => {
  return (
    <Layout title={title}>
      <components.h1>{title}</components.h1>
      <components.h3>{excerpt}</components.h3>
      <br />
      <components.h3>Author: {author}</components.h3>
      <components.h3>
        Publish Date: {formatDateString(publishDate)}
      </components.h3>
      <components.h3>Tags: {tagsToString(tags)}</components.h3>
      <MyDivider />
      {/* @ts-ignore */}
      <MDXRemote {...mdxSource} components={components} />
    </Layout>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('umwdevlogs'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps: GetStaticProps = async context => {
  const markdownWithMeta = fs.readFileSync(
    path.join('umwdevlogs', context?.params?.slug + '.mdx'),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta, {
    // Setting to make sure it doesn't convert date-strings to non-serializable Date objects
    engines: {
      // Ignore unknown type error
      // @ts-ignore
      yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA })
    }
  })
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default DevlogPost
