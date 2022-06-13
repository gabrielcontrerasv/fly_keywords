import styled from "styled-components";

const PageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap;

`;

const CardsHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & div:nth-child(2) {
    max-width: 2rem;
  }
`;

const CardsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardProfileContainer = styled.div`
  max-width: 50%;

  & img {
    max-width: 100%;
  }
`;


const CardFlagContainer = styled.div`
  max-width: 2rem;

  & img {
    max-width: 100%;
  }
`;

const Card = styled.div`
  border-radius: 0.5rem;
  min-width: 90vw;
  max-width: 90vw;
  padding: 0.5rem;



  img {
    min-width: 100%;
  }

  @media (min-width: 768px) {
    min-width: 50vw;
    max-width: 50vw;
  }

  @media (min-width: 992px) {
    min-width: 30vw;
    max-width: 30vw;
  }

  @media (min-width: 1200px) {
    min-width: 15vw;
    max-width: 15vw;
  }
`;

export {
  CardsContainer,
  Card,
  PageContainer,
  CardsHeader,
  CardFlagContainer,
  CardsBody,
  CardProfileContainer
};
