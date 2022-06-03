import { useState, useEffect } from "react";
import { CustomPie } from "../../components/CustomCharts/CustomPie";
import { PageContainer, CardsContainer, SearchContainer } from "./styles";
import Navbar from "../../components/Nabvar";

function Home() {
  return (
    <div>
    <h1 style={{textAlign:"center", fontFamily:"Helvetica"}}>Medalleria</h1>
    
    <PageContainer>
      <div className= "global" style={{textAlign:"center", fontFamily:"Helvetica"}}>
    <CustomPie/><h1>Resultados Generales</h1>
      </div>
    </PageContainer>
    <PageContainer>
      <Navbar />
      <div className= "individual" style={{textAlign:"center", fontFamily:"Helvetica", display:"flex", flexDirection:"column"}}>
        <CustomPie /><h1>Ejercito</h1>
        <CustomPie /><h1>Fuerza Aerea</h1>
        <CustomPie /><h1>Armada</h1>
      </div>
    </PageContainer>
    </div>

  );
}

export default Home;
