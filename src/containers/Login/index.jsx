import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { ProviderContext } from "../../providers";
import {} from "./styles";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser } = useContext(ProviderContext);
  const history = useNavigate();

  const submit = () => {
    let user = {
      id: 1,
      name: "usuario 1",
    };
    updateUser(user);
    history("/home");

    //alert("error");
  };

  return (
    <div>
      <div>
        <div>
          <input
            value={user}
            autoFocus
            placeholder="Usuario"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => submit()}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
