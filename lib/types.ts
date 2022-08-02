export type PostData = {
  data: {
    [key: string]: any
  }
  content: string
  slug: string
}

export function isValidQuery<T extends Record<string, unknown>>(
  query: any,
  fields: (keyof T)[]
): query is T {
  return Object.keys(query).every(key => fields.includes(key))
}

export interface FrontMatterProps {
  title: string
  publishDate: string
  excerpt: string
  author: string
  draft: boolean
  tags: string[]
}
