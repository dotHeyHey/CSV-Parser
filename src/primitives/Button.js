import React from 'react'
import styled from 'styled-components'
import { color, fontSize, space, width } from 'styled-system'

import theme from '../styles/theme'

import Text from './Text'

const type = props => {
  switch (props.type) {
    case 'primary':
      return `
          box-shadow: 0 2px 0px rgba(0, 0, 0, .5);
          color: ${theme.colorStyles.textOnPrimary.color};
          border: ${theme.colors.black} ${theme.borders.normal};
          background-image: linear-gradient(290deg, ${theme.colors.black}, ${theme.colors.black});
          &:hover,
          &:focus {
              opacity: 0.8
          };
        `
    case 'gray':
      return `
          box-shadow: 0 2px 0px rgba(0, 0, 0, .5);
          color: ${theme.colorStyles.textOnPrimary.color};
          border: ${theme.colors.lightPrimary} ${theme.borders.normal};
          background-image: linear-gradient(290deg, ${theme.colors.lightGray}, ${theme.colors.lightGray});
          &:hover,
          &:focus {
              opacity: 0.8
          };
        `
    case 'warning':
      return `
        box-shadow: 0 2px 0px rgba(0, 0, 0, .5);
        color: ${theme.colorStyles.textOnPrimary.color};
        border: #f03c3c ${theme.borders.normal};
        // background-color: ${theme.colorStyles.textOnPrimary.bgColor};
        background-image: linear-gradient(290deg, #f03c3c, #df1111);
        &:hover,
        &:focus {
            opacity: 0.8
        };
      `
    default:
      return `
          background-color: rgba(0,0,0,0);
          color: ${theme.colors.gray};
          border: ${theme.colors.lightGray} ${theme.borders.normal};
          &:hover,
          &:focus {
            background-color: ${props.disabled ? null : theme.colors.lightGray}
          };
      `
  }
}

const disabled = () => {
  return `
    pointer: not-allowed;
  `
}

const Button = styled(Text)`
  text-transform: uppercase;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${theme.radii.normal};
  border: none;
  outline: none;   
  letter-spacing: ${theme.letterSpacings.slight};
  text-align:center;
  transition: all 0.2s ease-in-out;
  min-width: min-content;
  &:active {
    box-shadow: none;
    opacity: ${0.85};
  };
  
  opacity: ${p => (p.disabled ? 0.5 : 1)}
  justify-content: center;
  align-items: center;
	${color}
	${fontSize}
	${space}
	${width}
	${type}
`

// const Button = props => (
//   <StyledButton {...props}>
//     <Text>{props.children}</Text>
//   </StyledButton>
// );

Button.defaultProps = {
  py: 2,
  px: 3
}

Button.displayName = 'Button'

export default Button
