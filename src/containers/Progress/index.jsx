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
          <ChartBar minWith={"60vw"} />
        </PageContentTop>
        <PageContentDown>
          <CustomPie />
          <CustomPie />
          <CustomPie />

        </PageContentDown>
      </PageContent>
    </Layout>
  );
}

export default Home;
