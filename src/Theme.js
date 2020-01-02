import React from 'react'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styledNormalize from 'styled-normalize'

import theme from './styles/theme'
import GlobalCSS from './styles/global'

const GlobalStyle = createGlobalStyle`
	${styledNormalize};
  ${GlobalCSS};
  `
import { Page, Flex, Box } from './primitives'

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <GlobalStyle />
        {children}
      </Page>
    </ThemeProvider>
  )
}

export default Theme
