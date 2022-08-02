import { Box, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'

interface CalloutProps {
  children: React.ReactNode | React.ReactNode[]
}

const Callout: FC<CalloutProps> = ({ children }) => {
  return (
    <Box
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={3}
      mb={6}
      textAlign="center"
      css={{ backdropFilter: 'blur(10px)' }}
    >
      {children}
    </Box>
  )
}

export default Callout
