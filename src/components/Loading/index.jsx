import { useState, Suspense, lazy } from "react";
import { ContainerPage, ImageLoading } from "./styles";

import loading from "../../assets/imgs/loading.webp";

const Loading = () => {
  return (
    <ContainerPage>
      <ImageLoading src={loading} alt="" />
    </ContainerPage>
  );
};

export default Loading;
