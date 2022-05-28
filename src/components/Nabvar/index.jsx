import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { NavbarContainer } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/progress">Avances</Link>
      </div>
    </NavbarContainer>
  );
};
export default Navbar;
