import { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import Navbar from "../../components/Nabvar";
import { CustomPie } from "../../components/CustomCharts/CustomPie";
import { PageContent, PageContentTop, PageContentDown } from "./styles";

function Home() {
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
        </PageContentDown>
      </PageContent>
    </Layout>
  );
}

export default Home;
