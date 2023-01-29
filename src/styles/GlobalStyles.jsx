import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
    font-family: sans-serif;
    background-color: ${colors.primaryDarkColor};
  }

  html, body, #root{
    height: 100%;
  }

  button{
    cursor: pointer;
    background-color: ${colors.primaryColor};
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 400;
    transition: all 150ms ease;

    &:hover{
      background-color: ${colors.primaryDarkColor};
    }
  }

  a{
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul{
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success{
    background-color: ${colors.successColor};
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error{
    background-color: ${colors.errorColor};
  }
`;

export const Container = styled.div`
  max-width: 720px;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;
