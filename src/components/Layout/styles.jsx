import styled from "styled-components";
import background from "../../assets/imgs/bg_4.png";

const PageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;

  ${(props) => {
    if (props.backgroundColor) {
      return `background-color: ${props.background};`;
    } else {
      return ` background-image: url(${background});`;
    }
  }}

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;


const PageContent = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-family: Helvetica;
  text-align: center;
`;

export { PageContainer, PageContent, Title };
