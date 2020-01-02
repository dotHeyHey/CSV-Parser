import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import NotFound from './pages/NotFound'
import Home from './pages/Home'


import { Page, Flex } from './primitives'

const Layout = ({ children, ...p }) => {
  return (
    <Flex
      bg="foregroundBacking"
      flexDirection="column"
      width={1}
      height={'100%'}
      justifyContent="center"
    >
      <Header {...p} />
      <Page flex={1}>
        {children}
      </Page>
      <Footer />
    </Flex>
  )
}

export default p => (
  <Layout {...p}>
    <Switch>
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} {...p} />
        }}
      />
      <Route component={NotFound} />
    </Switch>
  </Layout>
)
