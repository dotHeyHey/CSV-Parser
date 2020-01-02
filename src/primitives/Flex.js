import React from 'react'
import styled from 'styled-components'
import {
  alignItems,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  alignSelf,
  justifySelf,
  backgroundImage
} from 'styled-system'

import Box from './Box'

const Flex = styled(Box)`
  display: flex;
	${alignItems}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${alignSelf}
  ${justifySelf}
`

Flex.Picture = styled(Flex)`
  ${backgroundImage}
`
export default Flex;