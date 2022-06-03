import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { ProviderContext } from "../../providers";
import {
  PageContainer,
  LoginContainer,
  LoginHeader,
  LoginHeaderEjc,
  LoginHeaderArc,
  LoginFooter,
} from "./styles";

import fac from "../../assets/imgs/escudo4.png";
import armada from "../../assets/imgs/armada.png";
import ejercito from "../../assets/imgs/ejercito.png";
import { faCompass } from "@fortawesome/free-regular-svg-icons";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser } = useContext(ProviderContext);
  const history = useNavigate();

  const submit = () => {
    if (user && password) {
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
      
  
      <LoginContainer>
        <LoginHeaderEjc>
          <img src={ejercito} alt="" />
        </LoginHeaderEjc>
        <LoginFooter>
          <div>
            <h4 className="text-center">EJERCITO NACIONAL</h4>
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
                className="btn btn-secondary text-center"
                onClick={() => {
                  submit();
                }}
              >
                Ingresar
              </button>
            </div>
          </div>
        </LoginFooter>
      </LoginContainer>

      <LoginContainer>
      <strong style={{color:"white",fontSize: "1.5rem",textAlign:"center"}}>
          ANFITRION
          </strong>
        <LoginHeader>
          <img src={fac} alt="" />
        </LoginHeader>
        <LoginFooter>
          <div>
            <h4 className="text-center">FUERZA AÉREA COLOMBIANA</h4>
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
                Ingresar
              </button>
            </div>
          </div>
        </LoginFooter>
      </LoginContainer>




      <LoginContainer>
        <LoginHeaderArc>
          <img src={armada} alt="" />
        </LoginHeaderArc>
        <LoginFooter>
          <div>
            <h4 className="text-center">ARMADA NACIONAL</h4>
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
                Ingresar
              </button>
            </div>
          </div>
        </LoginFooter>
      </LoginContainer>
      <div></div>
    </PageContainer>
  );
}

export default Login;
