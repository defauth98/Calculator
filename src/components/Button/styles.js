import styled from "styled-components";

export const Container = styled.div`
  width: 60px;
  height: 60px;

  margin-bottom: 25px;

  button {
    width: 60px;
    height: 56px;

    padding-top: 7px;

    border-radius: 8px;

    background-color: #404245;
    color: #fff;

    font-size: 40px;
    border: 0;
    cursor: pointer;

    outline: none;
  }

  button:focus {
    border: 0;
  }

  button:hover {
    background-color: #404245cc;
    color: white;
  }

  .parentheses {
    padding-bottom: 5px;
  }

  .operation {
    background-color: #ee0606;

    padding-bottom: 5px;
  }

  .operation:hover {
    background-color: #ee0606cc;
  }

  .double {
    width: 150px;
    background-color: #c5c5c5;
    color: #000;
  }
`;
