import * as React from "react";
import { Pie } from "react-chartjs-2";
import {divLauncher} from "./styles"

function PieChart(data:any) {
  return (
    <div className= "chart-container" >
      <divLauncher>

    <h2 style={ { textAlign: "center" } }> Pie Chart </h2>
      <Pie
  data = { data.chartData }
  options = {{
    plugins: {
      title: {
        display: true,
        text: "Users Gained between 2016-2020"
      }
    }
  }
}
/>
</divLauncher>
  </div>
  );
}
export default PieChart;