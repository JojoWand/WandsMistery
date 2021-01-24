import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  margin-top: 10px;
  font-size: 18px;
  margin: 40px 15px;
  width: 100%;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-family: ${props => props.theme.font.title};
    font-weight: lighter;
    font-size: 2em;
  }
  .message {
    font-family: ${props => props.theme.font.text};
    font-weight: 300;
    font-size: 1em;
    text-align: justify;
  }
`;
