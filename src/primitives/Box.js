import React from 'react'
import styled from 'styled-components'
import {
  borderRadius,
  space,
  width,
  height,
  color,
  order,
  position,
  top,
  right,
  bottom,
  left,
  size,
  textAlign,
  minWidth,
  maxWidth,
  maxHeight,
  minHeight,
  border,
  borderRight,
  borderBottom,
  borderTop,
  borderLeft,
  fontFamily,
  boxShadow,
  zIndex
} from 'styled-system'

const Box = styled.div`
  box-sizing: border-box;
  ${zIndex}
  ${boxShadow}
	${borderRadius}
  ${border}
  ${borderRight}
  ${borderLeft}
  ${borderTop}
  ${borderBottom}
	${color}
	${order}
	${position}
	${top}
	${right}
	${bottom}
	${left}
	${space}
	${textAlign}
	${size}
  ${width}
  ${height}
  ${minWidth}
  ${maxWidth}
  ${minHeight}
  ${maxHeight}
  ${fontFamily}
`

Box.Card = ({ children, ...props }) => {
  return (
    <Box
      bg="darkGray"
      flexDirection="column"
      justifyContent="center"
      px={[2, 5]}
      py={4}
      my={3}
      boxShadow="0 2px 2px rgba(0, 0, 0, .5)"
      border={`darkerGray 3px solid`}
      borderRadius="25px"
      {...props}
    >
      {children}
    </Box>
  )
}

Box.displayName = 'Box'

export default Box
