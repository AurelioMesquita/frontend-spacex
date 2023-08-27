import { styled } from "styled-components";

export const LauncherSent = styled.div`
  margin-left: 10%;
  width: 450px;
  height: 290px;
  align-items: center;
  color: white;
  background-color: #83898f;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
  justify-content: space-between;
  background-color: #83898f;
  border-radius: 7px 7px 7px 7px;
  width: 450px;
  height: 420px;
  overflow: hidden;
`;

export const CardContainerTitulo = styled.h3`
  color: white;
  align-items: center;
  font-weight: bold;
  margin: 0 10px;
`;

export const ParagrafoContainer = styled.p`
  overflow: hidden;
  margin: 3px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; // Quantidade de linhas
  -webkit-box-orient: vertical;
  margin-left: 15px;
  color: black;
`;

export const CardFailue = styled.div`
  display: inline-block;
  color: red;
`;
export const CardSucess = styled.div`
  display: inline-block;
`;
