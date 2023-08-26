import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import ChartData from "./chart";
import { CardContainer } from "./styles";

Chart.register(CategoryScale);

export default function LauncherPerYear(props: any) {
  const [chartData, setChartData] = useState({
    labels: props.dados.map(data => data.launch_year),
    datasets: [
      {
        label: "Lançamentos",
        data: props.dados.map(data => data.launch_window),
        backgroundColor: ["#111111", "#ecf0f1", "#50AF95", "#f3ba2f"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <CardContainer id={props.dados.id}>
      <ChartData chartData={chartData} />
    </CardContainer>
  );
}
