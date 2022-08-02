import { useEffect, useRef, useState } from 'react'
import { PostData } from './types'

export const useDevlogPosts = (startingIndex: number = 1) => {
  const didLoadRef = useRef(false)

  const [posts, setPosts] = useState<PostData[]>([])
  const [currentPageIndex, setCurrentPageIndex] = useState(startingIndex)
  const [isLoading, setIsLoading] = useState(true)

  const loadData = async (pageIndex: number) => {
    const res = await fetch(`/api/posts?page=${pageIndex}`) // absolute url is supported here
    const loadedPosts = await res.json()
    setPosts(_posts => [..._posts, ...loadedPosts])
    setIsLoading(false)
  }

  const loadMorePosts = async () => {
    loadData(currentPageIndex + 1)
    setCurrentPageIndex(index => index + 1)
  }

  useEffect(() => {
    // In this case, whether we are mounting or remounting,
    // we use a ref so that we only initially load data once.
    // See https://github.com/reactwg/react-18/discussions/18
    if (!didLoadRef.current) {
      didLoadRef.current = true

      loadData(startingIndex)
    }
    return () => {}
    // Run once to load data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [posts, isLoading, loadMorePosts, currentPageIndex] as const
}
