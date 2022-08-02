import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { FC } from 'react'

interface SectionProps {
  children: React.ReactNode | React.ReactNode[]
  mt?: number
  mb?: number
  delay?: number
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section: FC<SectionProps> = ({ children, mt = 0, mb = 6, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: '0.8', delay: delay.toString() }}
    mb={mb}
    mt={mt}
  >
    {children}
  </StyledDiv>
)

export default Section
