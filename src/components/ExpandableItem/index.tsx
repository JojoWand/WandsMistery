import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import { Container } from "./styles";

interface IProps {
  title: string;
}
const ExpandableItem: React.FC<IProps> = props => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Container layout>
      <motion.button
        layout
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {props.title}
      </motion.button>
      <motion.hr layout className="divider" />
      <AnimatePresence>
        {expanded && (
          <motion.span
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {
                y: -30,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
              exit: {
                x: "-30%",
                opacity: 0,
              },
            }}
            className="content"
          >
            {props.children}
          </motion.span>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default ExpandableItem;
