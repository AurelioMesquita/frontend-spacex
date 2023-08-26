import * as React from "react";
import { Pie } from "react-chartjs-2";
import { LauncherSent } from "./styles";

function PieChart(data: any) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Lançamento de foguetes</h2>
      <LauncherSent>
        <Pie
          data={data.chartData}
          style={{
            display: "flex",
            width: "280px",
            height: "200px",
            marginBottom: 0,
          }}
          options={{
            plugins: {
              legend: {
                display: true,
                position: "left",
                align: "center",
                labels: {
                  padding: 20,
                  color: "white",
                },
              },
            },
          }}
        />
      </LauncherSent>
    </>
  );
}
export default PieChart;
