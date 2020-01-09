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
      py={[4, 4]}
      flexDirection="column"
      justifyContent="center"
    >
      <Logo />

      <Flex>
        <a href="https://discord.gg/9zVg2GP" target="_blank">
          <Button type="primary">Discord</Button>
        </a>

        <Box mx={1} />

        <a href="https://statsmoji.com" target="_blank">
          <Button type="primary">Statsmoji</Button>
        </a>
      </Flex>
      <Box my={[2, 0]} />
    </Flex>
  )
}

export default Header
