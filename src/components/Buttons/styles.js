import styled from 'styled-components';

export const ButtonSty = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  background: #00cde4;
  border-radius: 8px;
  color: #fff;
  padding: 0 24px;
  transition: 0.4s;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;
