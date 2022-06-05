import React from "react";

import Navbar from "../Nabvar";
import { PageContainer, PageContent, Title } from "./styles";

const Layout = ({ children, backgroundColor, title }) => {
  return (
    <PageContainer backgroundColor={backgroundColor}>
      <Navbar />
      {title && <Title>{title}</Title>}
      <PageContent>{children}</PageContent>
    </PageContainer>
  );
};

export default Layout;
