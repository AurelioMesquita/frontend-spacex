import styled from "styled-components";

export const DivSearch = styled.div`
  margin-bottom: 20px;
`;

export const InputSearch = styled.input`
  padding: 10px;
  width: 450px;
  height: 40px;
  background: none;
  border: 2px solid white;
  border-radius: 50px;
  box-sizing: border-box;
  font-family: Comic Sans MS;
  font-size: 26px;
  color: white;
  outline: none;
  transition: 0.5s;
  &:hover {
    width: 350px;
    background: gray;
    border-radius: 7px;
  }
`;
export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px;

  padding: px;
`;
export const ConteudoContainer = styled.div`
  display: flex;
  color: white;
  padding: 10px;
  flex-wrap: wrap;
`;
