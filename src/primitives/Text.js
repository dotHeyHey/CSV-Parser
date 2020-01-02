import React from 'react'
import styled from 'styled-components'
import {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  letterSpacing,
  fontFamily
} from 'styled-system'

import theme from '../styles/theme'
import Box from './Box'

const Text = styled(Box)`
  overflow: hidden;
  text-overflow: ${p => (p.overflow ? 'ellipsis' : 'none')};
  white-space: ${p => (p.wrap ? 'wrap' : 'nowrap')};
  font-weight: ${p => (p.bold ? 'bold' : 'normal')};
  color: black;
  letter-spacing: ${theme.letterSpacings.slight};
  // text-shadow: ${props => (props.color ? '0 0 0.05em' : 'none')};
	${color}
	${fontSize}
	${fontWeight}
	${lineHeight}
	${space}
	${textAlign}
  ${letterSpacing}
  ${fontFamily}
`

Text.displayName = 'Text'

Text.defaultProps = {
  fontSize: [1, 2]
}

Text.Heading = ({ children, bold, ...props }) => {
  return (
    <Text
      mx={4}
      my={2}
      fontSize={[2, 4, 6]}
      fontWeight="bold"
      letterSpacing="slight"
      fontFamily={bold ? 'Roboto' : 'Roboto'}
      {...props}
    >
      {children}
    </Text>
  )
}

Text.Description = styled(Text)`
  white-space: normal;
`

Text.Link = styled(Text)`
  color: 
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${theme.radii.normal};
  letter-spacing: ${theme.letterSpacings.normal};
`

Text.Link.defaultProps = {
  color: 'darkWhite',
  fontSize: 1,
  opacity: 1,
  mx: 4
}

export default Text
