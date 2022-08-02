import { Box, Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Router } from 'next/router'
import Footer from '../footer'
import Navbar from '../navbar'

interface Props {
  children: React.ReactNode
  router: Router
}

const Main: NextPage<Props> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>qzxj media - homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
