import styled from "styled-components";
import background from "../../assets/imgs/bg_4.png";

const PageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  padding: 4rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export { PageContainer, CardsContainer, SearchContainer };
