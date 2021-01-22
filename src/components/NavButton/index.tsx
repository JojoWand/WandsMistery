import React, { useState } from "react";
import Link from "next/Link";
import { Container, Dropdown } from "./styles";
import { animate, AnimatePresence, motion } from "framer-motion";

interface IProps {
  children?: React.ReactNode;
  title: string;
  options?: Array<{ name: string; route: string }>;
}

const NavButton: React.FC<IProps> = props => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <Container
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      {props.title}
      {dropdown && props.options && (
        <Dropdown
          initial="hidden"
          animate="visible"
          exit="visible"
          variants={{
            hidden: {
              opacity: 0,
              x: "-10%",
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.1,
              },
            },
          }}
        >
          {props.options.map(option => (
            <Link href={option.route} key={option.route}>
              <a>{option.name}</a>
            </Link>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

export default NavButton;
