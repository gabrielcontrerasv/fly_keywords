import styled from "styled-components";

const ContainerPie = styled.div`
  min-width: ${(props) => (props.minWith ? props.minWith : "15vw")};
`;

export { ContainerPie };
