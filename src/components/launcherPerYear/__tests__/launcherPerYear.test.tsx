import React from "react";
import { render, screen } from "@testing-library/react";
import LauncherPerYear from ".."; // Certifique-se de importar o componente correto

describe("LauncherPerYear", () => {
  it("Deve renderizar o componente LauncherPerYear corretamente", () => {
    // Dados de exemplo para o teste
    const dados = [
      {
        id: 1,
        launch_year: 2023,
        launch_window: 5,
      },
      {
        id: 2,
        launch_year: 2018,
        launch_window: 3,
      },
    ];

    render(<LauncherPerYear dados={dados} />);

    // Verifique se os elementos esperados são renderizados
    // const cardContainer = screen.getByTestId("launcher-year-card");
    // expect(cardContainer).toBeInTheDocument();

    const chartData = screen.getByTestId("chart-data");
    expect(chartData).toBeInTheDocument();

    // Você também pode verificar outros elementos específicos, se necessário.
  });
});
