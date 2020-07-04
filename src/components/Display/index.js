import React from "react";

import { Container, Line } from "./styles";

function Display({ result, account }) {
  return (
    <Container>
      <h1>{account}</h1>
      <h2>{result}</h2>
      <Line />
    </Container>
  );
}

export default Display;
