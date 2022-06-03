import { useState, useEffect } from "react";

import { CustomPie } from "../../components/CustomCharts/CustomPie";

import { PageContainer, CardsContainer, SearchContainer } from "./styles";

import Navbar from "../../components/Nabvar";

function Home() {
  return (
    <PageContainer>
      <Navbar />
      <div>
        <CustomPie></CustomPie>
      </div>
    </PageContainer>
  );
}

export default Home;
