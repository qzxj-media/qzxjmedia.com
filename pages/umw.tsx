import { Button, Container, Heading } from '@chakra-ui/react'
import { NextPage } from 'next/types'
import { useState } from 'react'
import Callout from '../components/callout'
import DevlogList from '../components/devlog-list'
import Layout from '../components/layouts/post'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { useDevlogPosts } from '../lib/use-devlog-posts'

const Umw: NextPage = () => {
  const [posts, isLoading, loadMorePosts] = useDevlogPosts(1)
  const [listDelay, setListDelay] = useState(0.2)

  const onLoadMore = async () => {
    loadMorePosts()
    setListDelay(0)
  }

  return (
    <Layout title="UMW Devlog">
      <Container>
        <Callout>
          Underground Mecha Warriors (tentative title) is a turn-based, tactics
          game with roguelike elements.
        </Callout>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Description
          </Heading>

          <Paragraph>
            Imagine <em>Advance Wars</em> gameplay combined with the roguelike
            progression found in games like <em>Slay the Spire</em>. That is the
            experience that we want to achieve with Underground Mecha Warriors.
            Follow along with our development progress here!
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            U.M.W. Devlog
          </Heading>
          <Heading as="h4" variant="section-subheading">
            Recent Posts
          </Heading>
          {
            // @TODO: add a loading spinner here
            !isLoading && <DevlogList posts={posts} delay={listDelay} />
          }
          <Button onClick={onLoadMore}>Load more</Button>
        </Section>
      </Container>
    </Layout>
  )
}

export default Umw
export { getServerSideProps } from '../components/chakra'
