import styled from "styled-components";
import background from "../../assets/imgs/bg_4.png";

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: inherit;
  height: 100%;
  min-width: 100%;
`;

const PageContentTop = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const PageContentDown = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
  gap: 2rem;
`;

export { PageContent, PageContentDown, PageContentTop };
