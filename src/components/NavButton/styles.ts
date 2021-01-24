import { motion } from "framer-motion";
import styled from "styled-components";

interface IProps {
  dropdown?: boolean;
}

export const Container = styled(motion.button)<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  color: ${props => props.theme.colors.text};
  background: None;
  border: 1px solid ${props => props.theme.colors.wandscore};

  padding: 10px;
  margin: 5px;

  font-family: ${props => props.theme.font.title};
  flex-grow: 1;
  transition: 0.3s ease all;

  &:hover {
    background: ${props => props.theme.colors.background_hover};
    cursor: pointer;
  }
`;

export const Dropdown = styled(motion.div)`
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 100%;

  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.wandscore};
  a {
    width: 100px;
    padding: 10px;
    border: none;
    background: none;

    text-decoration: none;
    font-weight: 300;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.text};
    &:hover {
      background: ${props => props.theme.colors.background_hover};
      cursor: pointer;
    }
  }
`;
