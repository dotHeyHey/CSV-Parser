import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Text } from './index'

const Navbar = ({ links, onClick, cPage, fixedVertical }) => {
  // LINK: { label: 'Home', href: '/home' }
  return (
    <Flex
      flexDirection={fixedVertical ? 'column' : ['column', 'row']}
      zIndex={9001}
    >
      {links.map(({ href, label }) => {
        const active = cPage === href
        return (
          <Link to={href} key={href + label}>
            <Text.Link
              active={active}
              key={href + label}
              fontSize={2}
              href={href}
              mx={2}
              py={1}
              px={2}
            >
              {label}
            </Text.Link>
          </Link>
        )
      })}
    </Flex>
  )
}

export default Navbar
