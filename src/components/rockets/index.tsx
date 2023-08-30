import React, { useEffect, useState } from "react";
import {
  BodyContainer,
  ConteudoContainer,
  DivSearch,
  InputSearch,
} from "./styles";
import TableData from "../tableData";

export default function Rockets(props: any) {
  const [rows, setRows] = useState(props.dados);

  const handleChange = busca => {
    const find = busca.target.value;
    const buscafiltrado = props.dados.results.filter(check => {
      return (
        check.name.toLowerCase().includes(find.toLowerCase()) ||
        check.rocket
          .toLowerCase()
          .includes(
            find.toLowerCase() ||
              check.success.toLowerCase().includes(find.toLowerCase()),
          )
      );
    });
    setRows(buscafiltrado);
  };
  return (
    <ConteudoContainer>
      <DivSearch className="box">
        <form name="search">
          <InputSearch
            type="text"
            placeholder="Pesquisar..."
            className="input"
            name="txt"
            onChange={busca => handleChange(busca)}
          ></InputSearch>
        </form>
      </DivSearch>
      <BodyContainer>
        <TableData dados={rows} />
      </BodyContainer>
    </ConteudoContainer>
  );
}
