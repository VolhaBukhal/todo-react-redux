import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${theme.font};
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }


  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    background: ${theme.colors.primary};
  }

  button {
    max-height: ${theme.fontSizes[5]}px;
    border: none;
    border-radius: ${theme.borderRadius[0]}px;
    color: ${theme.colors.white};
    text-transform: uppercase;
    padding: ${theme.spaces[1]}px  ${theme.spaces[2]}px;
    background-color: ${theme.colors.primary};
    transition: ${theme.transition};
    &:hover {
      background-color: ${theme.colors.secondary};
      cursor: pointer;
    }
    &:active {
      box-shadow: ${theme.boxShadows}
    }
  }
`
