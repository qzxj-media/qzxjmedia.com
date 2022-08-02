import { Heading } from '@chakra-ui/react'
import { FC } from 'react'

interface Props {
  author: string
}

const DevlogAuthor: FC<Props> = ({ author }) => {
  return (
    <Heading as="h4" variant="devlog-author">
      Posted by: {author}
    </Heading>
  )
}

export default DevlogAuthor
