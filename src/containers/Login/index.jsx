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

const data = [
  {
    user: "",
    password: "",
    title: "EJERCITO NACIONAL",
    shield: ejercito,
    isHost: false,
    background: "#e81531",
  },
  {
    user: "",
    password: "",
    title: "FUERZA AÉREA COLOMBIANA",
    shield: fac,
    isHost: true,
    background: "#000",
  },
  {
    user: "",
    password: "",
    title: "ARMADA NACIONAL",
    shield: armada,
    isHost: false,
    background: "#051766",
  },
];

function Login() {
  const { updateUser } = useContext(ProviderContext);
  const history = useNavigate();

  const [logins, setLogins] = useState([...data]);

  const setUser = (value, index) => {
    let copyLogins = [...logins];
    copyLogins[index].user = value;
    setLogins([...copyLogins]);
  };

  const setPassword = (value, index) => {
    let copyLogins = [...logins];
    copyLogins[index].password = value;
    setLogins([...copyLogins]);
  };

  const submit = (index) => {
    if (logins[index].user && logins[index].password) {
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
        name: logins[index].user,
      };
      updateUser(finalUser);
      history("/home");
    }

    //alert("error");
  };

  return (
    <PageContainer>
      {logins.map((element, index) => {
        return (
          <LoginContainer key={index}>
            {element.isHost && (
              <strong
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              >
                ANFITRION
              </strong>
            )}

            <LoginHeader background={element.background}>
              <img src={element.shield} alt="" />
            </LoginHeader>
            <LoginFooter>
              <div>
                <h4 className="text-center">{element.title}</h4>
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
                    value={element.user}
                    onChange={(e) => {
                      setUser(e.target.value, index);
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
                    value={element.password}
                    onChange={(e) => {
                      setPassword(e.target.value, index);
                    }}
                  />
                </div>

                <div
                  className="input-group mb-3"
                  style={{ textAlign: "right" }}
                >
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      submit(index);
                    }}
                  >
                    Ingresar
                  </button>
                </div>
              </div>
            </LoginFooter>
          </LoginContainer>
        );
      })}
    </PageContainer>
  );
}

export default Login;
