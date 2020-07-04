import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex: 2;
  flex-direction: column;

  padding-left: 30px;
  padding-right: 30px;
  padding-top: 130px;

  text-align: right;
  h1 {
    font-size: 22px;
    padding-bottom: 10px;
    color: #fffc;
  }
  h2 {
    font-size: 70px;
    font-weight: normal;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: #7a7676;
`;
