import { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import {ChartBar} from "../../components/CustomCharts/CustomBar";
import Navbar from "../../components/Nabvar";
import { CustomPie } from "../../components/CustomCharts/CustomPie";
import { PageContent, PageContentTop, PageContentDown } from "./styles";

function Home() {
  //<Bar />
  return (
    <Layout>
      <PageContent>
        <PageContentTop>
          <CustomPie minWith={"20vw"} />
        </PageContentTop>
        <PageContentDown>
          <CustomPie />
          <CustomPie />
          <CustomPie />
          <ChartBar />
        </PageContentDown>
      </PageContent>
    </Layout>
  );
}

export default Home;
