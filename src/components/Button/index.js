import React from "react";

import { Container } from "./styles";

import { FiDelete } from "react-icons/fi";
import {} from "react-icons/";

function Button({ label, parentheses, icon, operation, double, click }) {
  let classes = `
  ${parentheses ? "parentheses" : null} 
  ${label ? "label" : null}
  ${icon ? "icon" : null}
  ${operation ? "operation" : null}
  ${double ? "double" : null}`;

  return (
    <Container>
      <button className={classes} onClick={(e) => click && click(label)}>
        {label ? label : null}
        {icon === "delete" ? <FiDelete size="35" /> : null}
      </button>
    </Container>
  );
}

export default Button;
