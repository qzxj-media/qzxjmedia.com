import { Divider, useColorModeValue } from '@chakra-ui/react'

const MyDivider = () => {
  return (
    <Divider
      borderRadius={4}
      borderWidth={2}
      mt={4}
      mb={4}
      borderColor={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
    />
  )
}

export default MyDivider
