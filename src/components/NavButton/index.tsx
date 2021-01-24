import React, { useState } from "react";
import Link from "next/Link";
import { Container, Dropdown } from "./styles";
import { animate, AnimatePresence, motion } from "framer-motion";

interface IProps {
  children?: React.ReactNode;
  title: string;
  options?: Array<{ name: string; route: string }>;
  route?: string;
}

const NavButton: React.FC<IProps> = props => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <Link href={props.route || ""}>
        <Container
          layout
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          {props.title}
          <AnimatePresence>
            {dropdown && props.options && (
              <Dropdown
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                    },
                  },
                  exit: {
                    x: "-10%",
                    opacity: 0,
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
          </AnimatePresence>
        </Container>
      </Link>
    </>
  );
};

export default NavButton;
