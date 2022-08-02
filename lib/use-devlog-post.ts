import { useEffect, useRef, useState } from 'react'
import { FrontMatterProps, MdxSource } from './types'

export const useDevlogPost = (slug: string) => {
  const didLoadRef = useRef(false)

  const initialFrontMatter: FrontMatterProps = {
    title: '',
    publishDate: '',
    excerpt: '',
    author: '',
    draft: true,
    tags: []
  }

  const [frontMatter, setFrontMatter] =
    useState<FrontMatterProps>(initialFrontMatter)
  const [mdxSource, setMdxSource] = useState<MdxSource>()
  const [isLoading, setIsLoading] = useState(true)

  const loadData = async () => {
    const res = await fetch(`/api/post?s=${slug}`) // absolute url is supported here
    const loadedPost = await res.json()
    setFrontMatter(loadedPost.frontMatter)
    setMdxSource(loadedPost.mdxSource)
    setIsLoading(false)
  }

  useEffect(() => {
    // In this case, whether we are mounting or remounting,
    // we use a ref so that we only initially load data once.
    // See https://github.com/reactwg/react-18/discussions/18
    if (!didLoadRef.current) {
      didLoadRef.current = true

      loadData()
    }
    return () => {}
    // Run once to load data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [frontMatter, mdxSource, isLoading] as const
}
