import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { ContainerPie } from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Ejercito", "Armada", "Fuerza Aerea"],
  datasets: [
    {
      label: "quantity of awards",
      data: [12, 19, 15],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba( 5, 23, 102 )",
      ],
    },
  ],
};

export function CustomPie({ minWith }) {
  return (
    <ContainerPie minWith={minWith}>
      <Pie data={data} />
    </ContainerPie>
  );
}
