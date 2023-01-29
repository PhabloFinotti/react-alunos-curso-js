import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;

    input {
      padding: 10px 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
      font-size: 16px;

      &:focus {
        border-color: ${colors.primaryColor};
      }
    }
  }
`;
