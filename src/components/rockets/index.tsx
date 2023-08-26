import React from "react";
import {
  BodyContainer,
  ConteudoContainer,
  DivSearch,
  InputSearch,
} from "./styles";
import TableData from "../tableData";

export default function Rockets(props: any) {
  return (
    <ConteudoContainer>
      <DivSearch className="box">
        <form name="search">
          <InputSearch
            type="text"
            placeholder="Pesquisar..."
            className="input"
            name="txt"
          ></InputSearch>
        </form>
      </DivSearch>
      <BodyContainer>
        <TableData dados={props.dados} />
      </BodyContainer>
    </ConteudoContainer>
  );
}
