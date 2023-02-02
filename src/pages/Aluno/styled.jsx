import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;

  input {
    padding: 10px 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 20px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background-color: ${primaryColor};
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
