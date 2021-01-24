import { motion } from "framer-motion";
import styled from "styled-components";

export const Home = styled(motion.a)`
  text-decoration: none;
  text-align: center;
  flex-grow: 1;
  font-family: ${props => props.theme.font.title};
  font-size: 24px;
  padding: 0px 15px;
  align-self: center;
  white-space: nowrap;
  cursor: pointer;
`;
