import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  ::placeholder {
    ${({ theme }) => theme.text};
  }
  body {
    font: 400 14px Roboto, sans-serif;
    background:${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;
    transition: all 0.25s linear;
  }

  input, textarea {
    background:${({ theme }) => theme.input};
    color: ${({ theme }) => theme.text};
    border: ${({ theme }) => theme.border};
    transition: all 0.25s linear;
  }

  article {
    background:${({ theme }) => theme.article};
    box-shadow: ${({ theme }) => theme.box_shadow};
    transition: all 0.25s linear;
  }

  input, button, textarea, a{
    font: 400 18px Roboto, sans-serif;
    color: ${({ theme }) => theme.text};
  }
  input, textarea {
    color: ${({ theme }) => theme.inputText};
  }
  strong {
    color: ${({ theme }) => theme.text};
  }

  button {
    cursor: pointer;
  }
  button {
    color: ${({ theme }) => theme.svg}
  }
`;
