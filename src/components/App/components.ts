import styled from 'styled-components'

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`

export const StyledApp = styled.div`
  width: ${({ theme }) => theme.widths[3] * 7}px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.fontSizes[4]}px;
  padding: ${({ theme }) => theme.spaces[3]}px;
  padding-right: ${({ theme }) => theme.spaces[1]}px;
  max-height: ${({ theme }) => theme.widths[2]}vh;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius[2]}px;
  box-shadow: ${({ theme }) => theme.boxShadows};
`
