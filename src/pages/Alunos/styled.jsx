import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryColor } from '../../config/colors';

export const AlunoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const AlunoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-weight: 700;
  }
`;

export const AlunoActions = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 10px;
`;

export const NovoAluno = styled(Link)`
  display: inline-block;
  padding: 10px;
  margin: 15px 0;
  background-color: ${primaryColor};
  color: #fff;
  border-radius: 5px;
`;
