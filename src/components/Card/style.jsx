import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border-radius: 0.5rem;
  min-width: 90vw;

  img {
    min-width: 100%;
  }

  @media (min-width: 768px) {
    min-width: 50vw;
  }

  @media (min-width: 992px) {
    min-width: 30vw;
  }

  @media (min-width: 1200px) {
    min-width: 15vw;
  }
`;

export { CardsContainer, Card };
