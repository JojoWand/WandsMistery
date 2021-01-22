import React from "react";

import { Container } from "./styles";

interface IProps {
  children?: React.ReactNode;
  title: string;
  createdBy: string;
}

const WelcomeCard: React.FC<IProps> = props => {
  return (
    <Container>
      <h1>{props.title}</h1>
      <span className="message">{props.children}</span>
      <span className="created-by">Created By: {props.createdBy}</span>
    </Container>
  );
};

export default WelcomeCard;
