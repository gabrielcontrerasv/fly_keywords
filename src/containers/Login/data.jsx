import fac from "../../assets/imgs/escudo4.png";
import armada from "../../assets/imgs/armada.png";
import ejercito from "../../assets/imgs/ejercito.png";

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

export { data };
