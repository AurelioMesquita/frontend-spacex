import React, { useEffect, useState } from "react";
import Rocket from "../../assets/rocket.png";
import {
  HomeContainer,
  ConteudoContainer,
  HeaderContainer,
  H1Container,
  DivSearch,
  InputSearch,
  HrSearch,
  BodyContainer,
  ImgContainer,
  Body,
} from "./styles";
import dadosApiFake from "./dados";
import SideBar from "../../components/SideBar";
import Launcher from "../../components/launcher";
import LauncherPerYear from "../../components/launcherPerYear";
import Rockets from "../../components/rockets";

export default function HomePage() {
  const [lancamentos, setLancamentos] = useState<any>([]);
  const [statusBar, setStatusBar] = useState(0);

  useEffect(() => {
    (async () => {
      let res = await dadosApiFake();
      setLancamentos(res);
    })();
  }, []);

  return (
    <HomeContainer>
      <SideBar setStatusBar={setStatusBar} />
      <ConteudoContainer>
        <Body>
          <HeaderContainer>
            <H1Container>
              <ImgContainer src={Rocket} className="active" alt="foguete" />
              SpaceX
            </H1Container>
          </HeaderContainer>
          <HrSearch />
          <BodyContainer>
            {!statusBar ? (
              <>
                <Launcher dados={lancamentos} />
                <LauncherPerYear dados={lancamentos} />
              </>
            ) : (
              <Rockets dados={lancamentos} />
            )}
          </BodyContainer>
        </Body>
      </ConteudoContainer>
    </HomeContainer>
  );
}
