import styled from 'styled-components'

export const StyledList = styled.div`
  width: ${({ theme }) => theme.widths[3]}%;
  margin-top: ${({ theme }) => theme.borderRadius[1]}px;
  padding-right: ${({ theme }) => theme.spaces[3]}px;
  height: ${({ theme }) => theme.widths[2] - 5}%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.spaces[2]}px;
    height: ${({ theme }) => theme.spaces[2]}px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius[1]}px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`

export const NoTasks = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  color: ${({ theme }) => theme.colors.accent};
`
