import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 680px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;
export const Row = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 680px;
  margin: auto;
  align-items: center;
`;
