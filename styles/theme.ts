import { extendTheme, ThemingProps, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: ThemingProps) => ({
    body: {
      bg: mode('#f0e7db', '#303952')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': (props: ThemingProps) => ({
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: mode('blackAlpha.500', 'whiteAlpha.500')(props),
        textDecorationThickness: 3,
        // letterSpacing: 1.5,
        marginTop: 3,
        marginBottom: 4
      }),
      'section-subheading': {
        textDecoration: 'none',
        fontSize: 18,
        fontWeight: 500,
        // letterSpacing: 1.5,
        marginTop: 3,
        marginBottom: 4
      },
      'devlog-title': (props: ThemingProps) => ({
        textDecoration: 'underline',
        textDecorationColor: mode('blackAlpha.500', 'whiteAlpha.500')(props),
        textUnderlineOffset: 4,
        textDecorationThickness: 2,
        fontSize: 18,
        fontWeight: 600,
        // letterSpacing: 1.2,
        marginTop: 3,
        marginBottom: 2
      }),
      'devlog-date': {
        fontSize: 16,
        fontWeight: 800,
        fontFamily: 'Nunito Sans',
        // letterSpacing: 1.2,
        marginBottom: 0
      },
      'devlog-author': {
        fontSize: 16,
        fontWeight: 800,
        fontFamily: 'Nunito Sans',
        // letterSpacing: 1.2,
        marginBottom: 2
      }
    }
  },
  Link: {
    baseStyle: (props: ThemingProps) => ({
      color: mode('#e15f41', '#f5cd79')(props),
      textUnderlineOffset: 3
    })
  },
  Button: {
    variants: {
      solid: (props: ThemingProps) => ({
        bg: mode('#e15f41', '#f5cd79')(props),
        color: mode('#efefef', '#202020')(props),
        _hover: {
          bg: mode('#e15f4185', '#f5cd7985')(props)
        },
        _active: {
          bg: mode('#e15f4170', '#f5cd7970')(props)
        }
      })
    }
  }
}

const fonts = {
  body: "'Nunito Sans', sans-serif",
  heading: "'ShoraiSans'"
}

const colors = {
  grassTeal: '#88ccca'
  // @todo: add more theme colors here
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
