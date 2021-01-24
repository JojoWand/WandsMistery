import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid ${props => props.theme.colors.wandscore};
    padding: 0;
  }
  button {
    z-index: 0;
    background: ${props => props.theme.colors.background};
    display: block;
    width: 100%;
    background: none;
    border: none;
    flex-grow: 1;

    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.title};
    font-size: 1.2em;
    padding: 5px 15px;
    text-align: left;
    cursor: pointer;
  }
  .content {
    padding: 20px 10px;
    flex-grow: 1;
    font-family: ${props => props.theme.font.text};
    font-weight: lighter;
  }
`;
