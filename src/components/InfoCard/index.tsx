import React from "react";

import { Container } from "./styles";

interface IProps {
  title: string;
}
const InfoCard: React.FC<IProps> = props => {
  return (
    <Container
      layout
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h1>{props.title}</h1>
      <span className="message">{props.children}</span>
    </Container>
  );
};

export default InfoCard;
