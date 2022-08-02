import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm" mt={8}>
      &copy; {new Date().getFullYear()} qzxj media. All Rights Reserved.
      <br />
      Check out{' '}
      <a href="https://www.craftz.dog/" target="_blank" rel="noreferrer">
        craftz.dog
      </a>{' '}
      for dev tutorials, including the inspiration for this site.
    </Box>
  )
}

export default Footer
