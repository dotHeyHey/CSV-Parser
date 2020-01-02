import React from 'react'
import { Link } from 'react-router-dom'

import { Flex, Box, Text, Button, Navbar } from '../primitives'

const Logo = () => {
  return (
    <Text.Heading fontSize={[8, 8]}>
      <Link to="/">Statsmoji CSV</Link>
    </Text.Heading>
  )
}

const Header = () => {
  return (
    <Flex
      alignItems="center"
      px={[5, 8, 8]}
      py={[4, 5]}
      flexDirection={['column', 'row']}
      justifyContent="center"
    >
      <Logo />

      <Flex>
        <Link to="/">
          <Button type="primary">Discord</Button>
        </Link>
        <Box mx={1} />
        <Link to="/">
          <Button type="primary">Statsmoji</Button>
        </Link>
      </Flex>
      <Box my={[2, 0]} />
    </Flex>
  )
}

export default Header
