import React from "react";

import { Container } from "./styles";

import Button from "../Button";

const Keyboard = ({ addDigit, addOperation, removeAll, removeOne, result }) => {
  return (
    <Container>
      <Button label="C" click={() => removeAll()} />
      <Button label="+/-" sumandsub click={(digit) => addDigit(digit)} />
      <Button icon="delete" click={() => removeOne()} />
      <Button label="÷" operation click={() => addOperation("divi")} />

      <Button label="7" click={(digit) => addDigit(digit)} />
      <Button label="8" click={(digit) => addDigit(digit)} />
      <Button label="9" click={(digit) => addDigit(digit)} />
      <Button label="x" operation click={() => addOperation("multi")} />

      <Button label="4" click={(digit) => addDigit(digit)} />
      <Button label="5" click={(digit) => addDigit(digit)} />
      <Button label="6" click={(digit) => addDigit(digit)} />
      <Button label="+" operation click={() => addOperation("sum")} />

      <Button label="1" click={(digit) => addDigit(digit)} />
      <Button label="2" click={(digit) => addDigit(digit)} />
      <Button label="3" click={(digit) => addDigit(digit)} />
      <Button label="-" operation click={() => addOperation("sub")} />

      <Button label="0" click={(digit) => addDigit(digit)} />
      <Button label="." click={(digit) => addDigit(digit)} />
      <Button double operation label="=" click={() => result()} />
    </Container>
  );
};

export default Keyboard;
