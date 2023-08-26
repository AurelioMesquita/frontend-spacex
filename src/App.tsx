import React from "react";
import Launcher from "../src/components/launcher";
import { DivLauncher } from "./styles";
import LauncherPerYear from "./components/launcherPerYear";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="App">
      <div>
        <HomePage/>
        {/* <DivLauncher>
          <Launcher />
          <LauncherPerYear />
        </DivLauncher> */}
      </div>
    </div>
  );
}

export default App;
