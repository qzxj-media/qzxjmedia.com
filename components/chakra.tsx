import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react'
import { FC } from 'react'
import theme from '../styles/theme'

interface ChakraProps {
  cookies?: string
  children: React.ReactNode
}

interface SSProps {
  req: {
    headers: {
      cookie?: string
    }
  }
}

const Chakra: FC<ChakraProps> = ({ cookies, children }) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export default Chakra

export async function getServerSideProps({ req }: SSProps) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
