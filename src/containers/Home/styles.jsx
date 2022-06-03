import styled from "styled-components";
import background from "../../assets/imgs/bg_4.png";

const PageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CarouselContainer = styled.div`
  max-width: 25vw;

  img {
    max-width: 100%;
  }
`;

const CarouselContent = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: hsla(0, 0%, 0%, 0.6);
  border-radius: 0.5rem;
`;

export { PageContainer, CarouselContainer, CarouselContent };
