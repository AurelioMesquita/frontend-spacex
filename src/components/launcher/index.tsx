import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import PieChart from "./pieChart";
import {
  CardContainer,
  CardContainerTitulo,
  ParagrafoContainer,
} from "./styles";

Chart.register(CategoryScale);

export default function Launcher(props: any) {
  const [chartData, setChartData] = useState({
    labels: props.dados && props.dados.map(data => data.rocket.rocket_name),
    datasets: [
      {
        label: "Lançamentos",
        data: props.dados.map(data => data.launch_year),
        backgroundColor: ["#111111", "#ecf0f1", "#50AF95", "#f3ba2f"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <CardContainer id={props.dados.id}>
      <div>
        <PieChart chartData={chartData} />
        <CardContainerTitulo>Resultado de lançamento</CardContainerTitulo>
        <ParagrafoContainer>Sucesso</ParagrafoContainer>
        <ParagrafoContainer>Falha</ParagrafoContainer>
      </div>
    </CardContainer>
  );
}
