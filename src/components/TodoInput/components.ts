import styled from 'styled-components'
import { Form, Field } from 'formik'

type ErrorMessageProps = {
  isShown: boolean
}

export const ToolBar = styled.div`
  width: ${({ theme }) => theme.widths[3]}%;
`
export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.fontSizes[3]}px;
  padding-right: ${({ theme }) => theme.spaces[3]}px;
  justify-content: space-between;
`

export const StyledInputItem = styled.div`
  width: 100%;
`

export const StyledField = styled(Field)<ErrorMessageProps>`
  flex-grow: 1;
  width: ${({ theme }) => theme.widths[3]}%;
  padding: ${({ theme }) => theme.spaces[2]}px
    ${({ theme }) => theme.spaces[3]}px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.secondary};
  border-color: ${(props) => (props.isShown ? props.theme.colors.error : '')};
  &::-webkit-search-cancel-button:hover {
    cursor: pointer;
  }
`

export const Error = styled.div`
  color: ${({ theme }) => theme.colors.error};
`
