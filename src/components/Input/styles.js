import styled from 'styled-components';

export const InputContainerSty = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 0 24px;
  transition: 0.4s;

  &:focus {
    border: 1px solid #00cde4;
  }
`;

export const TextAreaSty = styled.textarea`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  padding: 10px 24px;
  transition: 0.4s;

  &:focus {
    border: 1px solid #00cde4;
  }
`;
