import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { ProviderContext } from "../../providers";
import {
  PageContainer,
  LoginContainer,
  LoginHeader,
  LoginFooter,
} from "./styles";

import logo from "../../assets/imgs/escudo4.png";

function Login() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser } = useContext(ProviderContext);
  const history = useNavigate();

  const submit = () => {
    if (user && password && name) {
      /*
      data = {};
      url = "";
      axios
        .post(url, data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
        */

      let finalUser = {
        id: 1,
        name: user,
      };
      updateUser(finalUser);
      history("/home");
    }

    //alert("error");
  };

  return (
    <PageContainer>
      <div></div>
      <div></div>
      <LoginContainer>
        <LoginHeader>
          <img src={logo} alt="" />
        </LoginHeader>
        <LoginFooter>
          <div>
            <h4>FUERZA AÉREA COLOMBIANA</h4>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Usuario sin @"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                #
              </span>

              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="input-group mb-3" style={{ textAlign: "right" }}>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  submit();
                }}
              >
                Registrarse
              </button>
            </div>
            <div className="input-group mb-3">
              <p style={{ textAlign: "right", minWidth: "100%" }}>
                <Link to="/">Login</Link>
              </p>
            </div>
          </div>
        </LoginFooter>
      </LoginContainer>
      <div></div>
    </PageContainer>
  );
}

export default Login;
