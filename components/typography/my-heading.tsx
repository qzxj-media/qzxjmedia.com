import { Heading, HeadingProps } from '@chakra-ui/react'
import { FC } from 'react'

interface MyHeadingType {
  H1: FC<HeadingProps>
  H2: FC<HeadingProps>
  H3: FC<HeadingProps>
  H4: FC<HeadingProps>
  H5: FC<HeadingProps>
  H6: FC<HeadingProps>
}

export const MyHeading: MyHeadingType = {
  H1: ({ children }) => (
    <Heading as="h1" variant="section-title">
      {children}
    </Heading>
  ),
  H2: ({ children }) => (
    <Heading as="h2" variant="section-subheading">
      {children}
    </Heading>
  ),
  H3: ({ children }) => (
    <Heading as="h3" variant="devlog-date">
      {children}
    </Heading>
  ),
  H4: ({ children }) => (
    <Heading as="h4" variant="devlog-author">
      {children}
    </Heading>
  ),
  H5: ({ children }) => (
    <Heading as="h5" variant="devlog-date">
      {children}
    </Heading>
  ),
  H6: ({ children }) => (
    <Heading as="h6" variant="devlog-date">
      {children}
    </Heading>
  )
}
