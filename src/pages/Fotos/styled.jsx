import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    background-color: #eee;
    border: 5px dashed ${colors.primaryColor};
    border-radius: 50%;
    cursor: pointer;
    transition: all 150ms ease;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  label:hover {
    background-color: #ddd;
    opacity: 0.8;
  }

  input {
    display: none;
  }
`;
