import { Container, Heading, Link } from '@chakra-ui/react'
import { NextPage } from 'next/types'
import NextLink from 'next/link'
import Layout from '../components/layouts/post'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Callout from '../components/callout'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Container>
        <Callout>
          Hello, qzxj media is a collaboration between Isaac and Ender to make
          fun, creative projects.
        </Callout>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Us
          </Heading>
          <Paragraph>We are Isaac and Ender. See what we make!</Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>
          <Paragraph>
            We are currently working on a video game tentatively titled{' '}
            <NextLink href="/umw" passHref scroll={false}>
              <Link>Underground Mecha Warriors (U.M.W.)</Link>
            </NextLink>
            .
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
