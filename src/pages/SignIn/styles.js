import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px;

  img {
    height: 100%;

    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  margin: auto;
  @media screen and (max-width: 800px) {
    text-align: center;
  }

  svg {
    width: 300px;
    margin: auto;
    display: block;

    path {
      fill: ${({ theme }) => theme.svg};
    }
  }
`;

export const Form = styled.form`
  margin-top: 60px;
  @media screen and (max-width: 800px) {
    margin-top: 15px;
    text-align: center;
  }

  input {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
  text-align: center;
`;
