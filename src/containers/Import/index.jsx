import { useState, useEffect } from "react";
import ParticipantsForm from "../../components/RegisterParticipants/participantsForm";

import Layout from "../../components/Layout";

function Import() {
  return (
  <>
  <Layout title={"IMPORTAR"} style={{fontWeight: 'bold'}}>
  <ParticipantsForm/>
  </Layout>
  </>
);
}

export default Import;
