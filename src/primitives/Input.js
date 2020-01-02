import React from 'react'
import styled from 'styled-components'
import {} from 'styled-system'

import { Box, Text, Flex, Image } from '.'
import theme from '../styles/theme'

const Styled = styled.input`
  background-color: rgba(0, 0, 0, 0);
  font-size: ${theme.fontSizes[3]};
  border: none;
  flex: 1;
  color: black;
  &:focus {
    border: none;
    outline: none;
  }
  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`

const StyledInput = ({
  withWrapper = true,
  label,
  children,
  icon,
  error,
  ...props
}) =>
  withWrapper ? (
    <StyledInput.Wrapper width={1} error={error}>
      {icon && <Image src={icon} size={20} mr={2} />}
      {label && (
        <>
          <Text>{label}</Text>
          <Box mx={1} />
        </>
      )}
      <Styled width={1} type="text" {...props} />
      {children}
    </StyledInput.Wrapper>
  ) : (
    <>
      <Flex
        flex={1}
        p={2}
        borderRadius="rounded"
      >
        <Styled type="text" {...props} />
        {children}
      </Flex>
    </>
  )

StyledInput.displayName = 'Input'

StyledInput.Wrapper = styled(Flex)`
  border: ${p => (p.error ? 'red' : theme.colors.black)} ${
  theme.borders.normal
};
  border-radius: ${theme.radii.rounded};
`

StyledInput.Wrapper.defaultProps = {
  p: 2,
  alignItems: 'center'
}

export default StyledInput
