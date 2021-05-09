import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    overflow: hidden;
  }

  button, input {
    background: 0;
    border: 0;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary: #19D3DA;
    --text-primary: #c9d1d9;
  }
`