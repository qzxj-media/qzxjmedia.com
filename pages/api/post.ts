import matter from 'gray-matter'
import yaml from 'js-yaml'
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'
import { isValidQuery, FrontMatterProps, MdxSource } from '../../lib/types'

type RequestQuery = {
  s: string
}

type ResponseData = {
  frontMatter: FrontMatterProps
  mdxSource: MdxSource
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (!isValidQuery<RequestQuery>(req.query, ['s'])) {
    return res.status(402)
  }

  const { s } = req.query

  const markdownWithMeta = fs.readFileSync(
    path.join('umwdevlogs', s + '.mdx'),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta, {
    // Setting to make sure it doesn't convert date-strings to non-serializable Date objects
    engines: {
      // Ignore unknown type error
      // @ts-ignore
      yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA })
    }
  }) as unknown as { data: FrontMatterProps; content: string }

  const mdxSource = await serialize(content)

  res.status(200).json({ frontMatter, mdxSource })
}
