import React from "react";

import { Container } from "./styles";

const NavBar: React.FC = props => {
  return <Container layout>{props.children}</Container>;
};

export default NavBar;
