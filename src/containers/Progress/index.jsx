import { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import Navbar from "../../components/Nabvar";
import { CustomPie } from "../../components/CustomCharts/CustomPie";
import {} from "./styles";

function Home() {
  return (
    <Layout backgroundColor={"white"} title={"Medalleria"}>
      <div
        className="global"
        style={{ textAlign: "center", fontFamily: "Helvetica" }}
      >
        <CustomPie />
        <h1>Resultados Generales</h1>
      </div>
      <div
        className="individual"
        style={{
          textAlign: "center",
          fontFamily: "Helvetica",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CustomPie />
        <h1>Ejercito</h1>
        <CustomPie />
        <h1>Fuerza Aerea</h1>
        <CustomPie />
        <h1>Armada</h1>
      </div>
    </Layout>
  );
}

export default Home;
