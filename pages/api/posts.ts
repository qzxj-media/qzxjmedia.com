// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPosts } from '../../lib/server/get-posts'
import { isValidQuery, PostData } from '../../lib/types'

type RequestQuery = {
  page: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData[]>
) {
  if (!isValidQuery<RequestQuery>(req.query, ['page'])) {
    return res.status(402)
  }

  const { page } = req.query
  let pageIndex = parseInt(page)

  if (isNaN(pageIndex)) {
    pageIndex = 1
  }

  const posts = getPosts('umwdevlogs', pageIndex)

  res.status(200).json(posts)
}
