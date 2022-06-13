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
  padding: 0.5rem;
  color: white;
  background-color: ${(props) =>
    props.background ? props.background : "black"};

  & div:nth-child(2) {
    max-width: 2rem;
  }
`;

const CardsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;

  & span {
    font-weight: bold;
  }
`;

const CardProfileContainer = styled.div`
  max-width: 50%;
  margin: 0.5rem 0;

  & img {
    max-width: 100%;
  }
`;

const CardFlagContainer = styled.div`
  max-width: 2rem;
  margin: 0.5rem 0;

  & img {
    max-width: 100%;
  }
`;

const Card = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  min-width: 90vw;
  max-width: 90vw;

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
    min-width: 20vw;
    max-width: 20vw;
  }
`;

export {
  CardsContainer,
  Card,
  PageContainer,
  CardsHeader,
  CardFlagContainer,
  CardsBody,
  CardProfileContainer,
};
