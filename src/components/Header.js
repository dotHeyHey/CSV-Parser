import React from 'react'
import { Link } from 'react-router-dom'

import { Flex, Box, Text, Button, Navbar } from '../primitives'

const Logo = () => {
  return (
    <Text.Heading fontSize={[8, 6]} color="white">
      <Link to="/">Statsmoji CSV</Link>
    </Text.Heading>
  )
}

const Header = () => {
  return (
    <Flex
      bg="backing"
      alignItems="center"
      px={[10, 8, 8]}
      py={5}
      flexDirection={['column', 'row']}
      justifyContent="center"
    >
      <Logo />

      {/* <Box mx={[0, 'auto']} my={[2, 0]} /> */}

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
