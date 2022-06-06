import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ProviderContext } from "../../providers";
import {
  PageContainer,
  LoginContainer,
  LoginContent,
  LoginHeader,
  LoginFooter,
  Host,
} from "./styles";

import { data } from "./data";

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
            {element.isHost && <Host>ANFITRION</Host>}
            <LoginContent>
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
            </LoginContent>
          </LoginContainer>
        );
      })}
    </PageContainer>
  );
}

export default Login;
