import { NextPage } from 'next/types'
import Layout from '../../components/layouts/post'
import { MDXRemote } from 'next-mdx-remote'
import components from '../../components/devlog-mdx-components'
import { formatDateString } from '../../lib/date-utils'
import MyDivider from '../../components/my-divider'
import { tagsToString } from '../../lib/tag-utils'
import { useRouter } from 'next/router'
import { useDevlogPost } from '../../lib/use-devlog-post'
import { Container } from '@chakra-ui/react'

const DevlogPost: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const [frontMatter, mdxSource, isLoading] = useDevlogPost(slug as string)
  const { title, excerpt, author, publishDate, tags } = frontMatter

  return (
    <Layout title={title}>
      {!isLoading && (
        <Container>
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
        </Container>
      )}
    </Layout>
  )
}

export { getServerSideProps } from '../../components/chakra'
export default DevlogPost
