import styled from "styled-components";
import background from "../../assets/imgs/bg_4.png";

const CarouselContainer = styled.div`
  max-width: 90vw;

  img {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    max-width: 80vw;
  }

  @media (min-width: 992px) {
    max-width: 40vw;
  }

  @media (min-width: 1200px) {
    max-width: 25vw;
  }
`;

const HomeContent = styled.div``;

const CarouselContent = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: hsla(0, 0%, 90%);
  border-radius: 0.5rem;
`;

export { CarouselContainer, CarouselContent, HomeContent };
