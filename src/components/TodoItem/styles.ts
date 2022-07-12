import styled from 'styled-components'

export const TaskItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.borderRadius[0]}px;
  margin-bottom: ${({ theme }) => theme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const TaskComplete = styled.div`
  width: ${({ theme }) => theme.borderRadius[0]}%;

  label {
    display: block;
    position: relative;
    user-select: none;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: ${({ theme }) => theme.spaces[4]}px;
      width: ${({ theme }) => theme.spaces[4]}px;
      z-index: 5;
    }
    span {
      position: absolute;
      height: ${({ theme }) => theme.fontSizes[4]}px;
      width: ${({ theme }) => theme.fontSizes[4]}px;
      background-color: ${({ theme }) => theme.colors.accent};
      transition: 0.5s all;

      &:after {
        content: '';
        position: absolute;
        display: none;
      }
    }
    &:hover input ~ span {
      background-color: ${({ theme }) => theme.colors.secondary};
    }

    input:checked ~ span {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  label input:checked ~ span:after {
    display: block;
  }

  label span:after {
    left: ${({ theme }) => theme.borderRadius[1] - 1}px;
    top: ${({ theme }) => theme.borderRadius[0]}px;
    width: ${({ theme }) => theme.borderRadius[0]}px;
    height: ${({ theme }) => theme.borderRadius[1]}px;
    border: solid ${({ theme }) => theme.colors.white};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

export const TaskBody = styled.div`
  flex-grow: 1;
  flex-basis: 70%;
`

export const TaskControls = styled.div`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.borderRadius[2]}%;
  gap: ${({ theme }) => theme.spaces[2]}px;
  justify-content: space-between;
`
