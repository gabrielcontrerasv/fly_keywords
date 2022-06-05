import styled from "styled-components";
import background from "../../assets/imgs/bg_4.png";

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
  background: hsla(0, 0%, 90%);
  border-radius: 0.5rem;
`;

export { CarouselContainer, CarouselContent };
