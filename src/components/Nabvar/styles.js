import styled from "styled-components";
import background from "../../assets/imgs/bg_4.png";

const NavbarContainer = styled.div`
  top: 35vh;
  left: 2rem;
  background-color: #444;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 0.5rem;

  & > div {
    padding: 0.5rem;
    transition: all 0.5s;
    margin: 2rem 0;
    border-radius: 10px;

    &:hover {
      transition: all 0.5s;
      background: #777;
    }
  }

  & a {
    color: white;
    text-decoration: none;
  }
`;

export { NavbarContainer };
