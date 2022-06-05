import styled from "styled-components";
import background from "../../assets/imgs/bg_4.png";

const PageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: nowrap;

  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 992px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    overflow: hidden;
    flex-wrap: nowrap;
  }
`;

const LoginContainer = styled.div`
  position: relative;
`;

const LoginContent = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;

  & > div {
    min-width: 90vw;
  }

  @media (min-width: 768px) {
    & > div {
      min-width: 60vw;
    }
  }

  @media (min-width: 992px) {
    & > div {
      min-width: 40vw;
    }
  }

  @media (min-width: 1200px) {
    & > div {
      min-width: 30vw;
    }
  }
`;

const LoginHeader = styled.div`
  background-color: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;

  & img {
    max-width: 90%;
  }
`;

const LoginFooter = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5rem;
`;

const Host = styled.strong`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  position: absolute;
  top: -2rem;
`;

export {
  PageContainer,
  LoginContainer,
  LoginHeader,
  LoginFooter,
  Host,
  LoginContent,
};
