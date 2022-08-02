// import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  LinkProps,
  SlideFade
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { FC, HTMLProps } from 'react'
import styled from '@emotion/styled'
// import { IoLogoGithub } from 'react-icons/io5'

type LinkItemProps = LinkProps &
  HTMLProps<HTMLAnchorElement> & {
    href: string
    path: string
  }

interface NavbarProps {
  path: string
}

interface MenuOption {
  name: string
  path: string
}

const menuOptions: MenuOption[] = [
  // {
  //   name: 'Projects',
  //   path: '/projects'
  // },
  {
    name: 'U.M.W.',
    path: '/umw'
  }
]

const StyledLinkText = styled.span`
  font-family: 'ShoraiSans';
`

const LinkItem: FC<LinkItemProps> = ({
  href,
  path,
  target,
  children,
  ...props
}) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        <StyledLinkText>{children}</StyledLinkText>
      </Link>
    </NextLink>
  )
}

const Navbar = (props: NavbarProps) => {
  const { path } = props

  const logoColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(3px)' }}
      zIndex={2}
      {...props}
    >
      <SlideFade in={true} offsetY="20px">
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="center" mr={5}>
            <NextLink href="/" passHref>
              <Link color={logoColor}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                  {'[qzxj logo]'}
                </Heading>
              </Link>
            </NextLink>
          </Flex>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            {menuOptions.map(option => {
              return (
                <LinkItem href={option.path} path={path} key={option.name}>
                  {option.name}
                </LinkItem>
              )
            })}
          </Stack>

          <Box flex={1} textAlign="right">
            <ThemeToggleButton />

            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href="/" passHref>
                    <MenuItem as={Link}>
                      <StyledLinkText>Home</StyledLinkText>
                    </MenuItem>
                  </NextLink>
                  {menuOptions.map(option => {
                    return (
                      <NextLink href={option.path} passHref key={option.name}>
                        <MenuItem as={Link}>
                          <StyledLinkText>{option.name}</StyledLinkText>
                        </MenuItem>
                      </NextLink>
                    )
                  })}
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </SlideFade>
    </Box>
  )
}

export default Navbar
