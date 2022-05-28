import styled from "styled-components";

const ContainerPage = styled.div`
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ccc;
`;

const ImageLoading = styled.img`
  max-width: 5rem;
`;

export { ContainerPage, ImageLoading };
