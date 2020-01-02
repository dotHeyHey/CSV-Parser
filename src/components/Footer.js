import React from 'react'

import { Flex, Text } from '../primitives'

const Footer = () => (
  <Flex
    py={2}
    px={4}
    alignItems="center"
    flexDirection="column"
  >
    <Text>Copyright © Statsmoji 2019 - {new Date().getFullYear()}</Text>
  </Flex>
)

export default Footer
