import styled from 'styled-components'

type FilterButtonProps = {
  active: boolean
}

export const FiltersPanel = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.widths[0]}px;
  width: ${({ theme }) => theme.widths[3]}%;
  margin-top: ${({ theme }) => theme.borderRadius[1]}px;
`

export const FilterButton = styled.button<FilterButtonProps>`
  background-color: ${(props) =>
    props.active ? props.theme.colors.secondary : ''};
`
