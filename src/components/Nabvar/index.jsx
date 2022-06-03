import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { containers } from "../../App";

import { NavbarContainer } from "./styles";

const elements = containers.filter((element) => {
  if (element.inMenu) return element;
});

const Navbar = () => {
  return (
    <NavbarContainer>
      {[...containers.filter((element) => element.inMenu)].map(
        (element, index) => {
          return (
            <Link key={index} to={element.path}>
              <div>{element.title}</div>
            </Link>
          );
        }
      )}
    </NavbarContainer>
  );
};
export default Navbar;
