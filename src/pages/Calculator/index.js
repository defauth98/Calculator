import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import Display from "../../components/Display";
import Keyboard from "../../components/Keyboard";

function Calculator() {
  const [numbersArray, setNumbersArray] = useState(["0", "0"]);
  const [arrayPosition, setArrayPosition] = useState(0);
  const [operation, setOperation] = useState("");
  const [fullAccont, setFullAccont] = useState("");

  useEffect(() => {
    let fullAccont;
    let symbol;

    if (operation === "divi") {
      symbol = "÷";
    } else if (operation === "multi") {
      symbol = "x";
    } else if (operation === "sum") {
      symbol = "+";
    } else {
      symbol = "-";
    }

    if (arrayPosition === 0) {
      fullAccont = `${numbersArray[0]}`;
    } else {
      fullAccont = `${numbersArray[0]}${symbol}${numbersArray[1]}`;
    }

    setFullAccont(fullAccont);
  }, [numbersArray, arrayPosition, operation]);

  function verifyLength(number) {
    const numberToVerify = number;

    const arrayOfNumber = numberToVerify.split("");

    if (arrayOfNumber) {
      if (arrayOfNumber.length > 7) {
        return false;
      }
    }

    return true;
  }

  function verifyPointSize(number) {
    const decimalPlaces = number.split(".");

    if (decimalPlaces[1] && decimalPlaces[1].split("").length > 3) {
      return false;
    }

    return true;
  }

  function addDigit(digit) {
    const Numbers = [...numbersArray];

    if (digit === "+/-") {
      Numbers[arrayPosition] = Numbers[arrayPosition] =
        Numbers[arrayPosition] * -1;

      setNumbersArray(Numbers);
      return;
    }

    if (Numbers[arrayPosition] === "0") {
      Numbers[arrayPosition] = digit;
    } else {
      Numbers[arrayPosition] = Numbers[arrayPosition] += digit;
    }

    if (
      verifyLength(Numbers[arrayPosition]) &&
      verifyPointSize(Numbers[arrayPosition])
    ) {
      setNumbersArray(Numbers);
    } else {
      alert("ERR");
    }
  }

  function removeOne() {
    const NumbersArray = [...numbersArray];

    if (NumbersArray[arrayPosition].length === 1) {
      NumbersArray[arrayPosition] = 0;
      setNumbersArray(NumbersArray);
      return;
    }
    if (NumbersArray[arrayPosition] > 1) {
      NumbersArray[arrayPosition] = String(NumbersArray[arrayPosition]).substr(
        0,
        NumbersArray[arrayPosition].length - 1
      );

      setNumbersArray(NumbersArray);
    }
  }

  function removeAll() {
    setNumbersArray(["0", "0"]);
    setArrayPosition(0);
    setFullAccont("0");
  }

  function addOperation(operation) {
    switch (operation) {
      case "multi":
        setOperation("multi");
        break;
      case "divi":
        setOperation("divi");
        break;
      case "sum":
        setOperation("sum");
        break;
      case "sub":
        setOperation("sub");
        break;

      default:
        break;
    }

    setArrayPosition(setArrayPosition === 1 ? 0 : 1);
  }

  function result() {
    const NumbersArray = [...numbersArray];
    const numberOne = Number(NumbersArray[0]);
    const numberTwo = Number(NumbersArray[1]);

    switch (operation) {
      case "multi":
        NumbersArray[0] = numberOne * numberTwo;
        NumbersArray[1] = "0";
        break;
      case "divi":
        NumbersArray[0] = numberOne / numberTwo;
        NumbersArray[1] = "0";
        break;
      case "sum":
        NumbersArray[0] = numberOne + numberTwo;
        NumbersArray[1] = "0";
        break;
      case "sub":
        NumbersArray[0] = numberOne - numberTwo;
        NumbersArray[1] = "0";
        break;

      default:
        break;
    }

    setNumbersArray(NumbersArray);
    setArrayPosition(0);
  }

  return (
    <Container>
      <Display account={fullAccont} result={numbersArray[arrayPosition]} />
      <Keyboard
        addDigit={(label) => addDigit(label)}
        addOperation={(operation) => addOperation(operation)}
        result={() => result()}
        removeAll={() => removeAll()}
        removeOne={() => removeOne()}
      />
    </Container>
  );
}

export default Calculator;
