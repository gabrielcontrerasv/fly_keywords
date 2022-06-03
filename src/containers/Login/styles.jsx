import styled from "styled-components";
import background from "../../assets/imgs/bg_4.png";

const PageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LoginContainer = styled.div`
  max-width: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const LoginHeader = styled.div`
  background-color: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30rem;
  min-height: 40vh;

  & img {
    max-width: 90%;
  }
`;

const LoginHeaderEjc = styled.div`
  background-color: #e81531;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30rem;
  min-height: 40vh;

  & img {
    max-width: 90%;
  }
`;

const LoginHeaderArc = styled.div`
  background-color: #051766;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30rem;
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
  min-width: 30rem;
  padding: 0.5rem;
`;

export {
  PageContainer,
  LoginContainer,
  LoginHeader,
  LoginFooter,
  LoginHeaderArc,
  LoginHeaderEjc,
};
