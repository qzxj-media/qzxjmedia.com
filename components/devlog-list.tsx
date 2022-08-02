import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { PostData } from '../lib/types'
import DevlogCard from './devlog-card'
import Section from './section'

interface ItemProps {
  post: PostData
  delay?: number
}

interface ListProps {
  posts: PostData[]
  delay?: number
}

const DevlogListItem: FC<ItemProps> = ({ post, delay = 0 }) => {
  return (
    <Section mt={6} mb={15} delay={delay}>
      <DevlogCard post={post} key={post.slug} />
    </Section>
  )
}

const DevlogList: FC<ListProps> = ({ posts, delay = 0 }) => {
  const interval = delay === 0 ? 0 : 0.1

  return (
    <Box>
      {posts.map((post, index) => {
        return (
          <DevlogListItem
            post={post}
            delay={delay + interval * index}
            key={index}
          />
        )
      })}
    </Box>
  )
}

export default DevlogList
