import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import PieChart from "./pieChart";
import {
  CardContainer,
  CardContainerTitulo,
  ParagrafoContainer,
  CardSucess,
  CardFailue,
} from "./styles";
import { checkFailue, checkSucess } from "../../helpers/verificaSucesso";

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
    <CardContainer data-testid="launcher-card" id={props.dados.id}>
      <div>
        <PieChart chartData={chartData} />
        <CardContainerTitulo>Resultado de lançamento</CardContainerTitulo>
        <CardSucess>
          <ParagrafoContainer>Sucesso</ParagrafoContainer>
          <ParagrafoContainer style={{ color: "green", fontWeight: "bold" }}>
            {checkSucess(props.dados)}
          </ParagrafoContainer>
        </CardSucess>
        <CardFailue>
          <ParagrafoContainer>Falha</ParagrafoContainer>
          <ParagrafoContainer style={{ color: "red", fontWeight: "bold" }}>
            {checkFailue(props.dados)}
          </ParagrafoContainer>
        </CardFailue>
      </div>
    </CardContainer>
  );
}
