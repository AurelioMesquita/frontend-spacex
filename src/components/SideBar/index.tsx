import {
  SideBarContainer,
  UlContainer,
  LiContainer,
  ImgContainer,
  SpanContainer,
  HrContainer,
} from "./styled";
import foguetevoando from "../../assets/foguetevoando.png";
import info from "../../assets/info.png";
import { useEffect, useState } from "react";

export default function SideBar({ setStatusBar }) {
  const [styleDashBoard, setStyleDashBoard] = useState("active");
  const [styleLaunch, setStyleLaunch] = useState("");

  useEffect(() => {
    if (styleDashBoard !== "active") {
      setStatusBar(1);
    } else {
      setStatusBar(0);
    }
  }, [styleLaunch]);

  return (
    <SideBarContainer>
      <UlContainer>
        <LiContainer
          className={styleDashBoard}
          onClick={() => {
            setStyleDashBoard("active");
            setStyleLaunch("");
          }}
        >
          <ImgContainer src={info} className="active" alt="foguete" />
          <SpanContainer className="sp">Dashboard</SpanContainer>
        </LiContainer>
        <LiContainer
          className={styleLaunch}
          onClick={() => {
            setStyleLaunch("active");
            setStyleDashBoard("");
          }}
        >
          <ImgContainer src={foguetevoando} className="active" alt="foguete" />
          <SpanContainer className="sp">Lançamentos</SpanContainer>
        </LiContainer>
      </UlContainer>
    </SideBarContainer>
  );
}
