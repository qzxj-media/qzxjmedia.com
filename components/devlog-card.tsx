import { Box, Heading, Link } from '@chakra-ui/react'
import { FC } from 'react'
import { PostData } from '../lib/types'
import Paragraph from './paragraph'
import NextLink from 'next/link'
import { formatDateString } from '../lib/date-utils'
import DevlogAuthor from './devlog-author'

interface Props {
  post: PostData
}

const DevlogCard: FC<Props> = ({ post }) => {
  return (
    <Box>
      <Heading as="h3" variant="devlog-title">
        <NextLink href={`/umwdevlog/${post.slug}`} passHref>
          <Link>{post.data.title}</Link>
        </NextLink>
      </Heading>
      <Heading as="h4" variant="devlog-date">
        {formatDateString(post.data.publishDate)}
      </Heading>
      <DevlogAuthor author={post.data.author} />
      <Paragraph>{post.data.excerpt}</Paragraph>
      <Paragraph>
        <NextLink href={`/umwdevlog/${post.slug}`} passHref>
          <Link>Read more</Link>
        </NextLink>
      </Paragraph>
    </Box>
  )
}

export default DevlogCard
