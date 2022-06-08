import { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import Navbar from "../../components/Nabvar";
import { CustomPie } from "../../components/CustomCharts/CustomPie";
import {} from "./styles";

function Home() {
  return (
    <Layout >
      <div>
    <CustomPie/>
    </div>
    
    <div>
    <CustomPie />
    <CustomPie />
    <CustomPie />
    </div>
    </Layout>
  );
}

export default Home;
