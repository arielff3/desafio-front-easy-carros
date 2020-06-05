import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media screen and (max-width: 800px) {
    justify-content: space-around;
    align-items: center;
    margin: 30px auto;
    flex-direction: column;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 0 10px;
    width: 20%;
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 4em;
`;

export const Logoff = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background: rgba(249, 9, 25, 0.8);
  border: 1px solid rgba(249, 9, 25, 0.4);
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 10px;
  color: #fff;
`;

export const VehiclesContainer = styled.div`
  background: ${({ theme }) => theme.box};
  border-radius: 20px;
  padding: 20px;
  max-height: 400px;
  overflow: auto;

  @media screen and (max-width: 768px) {
    max-height: 330px;
  }

  h3,
  p {
    color: ${({ theme }) => theme.box_text};
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;

    @media screen and (max-width: 425px) {
      grid-template-columns: repeat(2, 1fr);
    }

    li {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      border: 1px solid ${({ theme }) => theme.box_text};
      border-radius: 20px;

      button {
        background: transparent;
        border: none;

        svg {
          margin: 3px 0px 0 3px;
        }
      }
    }
  }
`;
