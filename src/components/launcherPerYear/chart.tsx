import * as React from "react";
import { Bar } from "react-chartjs-2";
import { LauncherSent } from "./styles";

function ChartData(data: any) {
  return (
    <>
      <LauncherSent>
        <h2 style={{ textAlign: "center" }}>Lançamento por ano</h2>
        <Bar
          data={data.chartData}
          style={{
            margin: "none",
            display: "flex",
            width: "430px",
            height: "350px",
          }}
        />
      </LauncherSent>
    </>
  );
}
export default ChartData;
