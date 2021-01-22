import React from "react";
import HomeLink from "../../components/HomeLink";
import Navbar from "../../components/Navbar";
import NavButton from "../../components/NavButton";

interface IProps {
  isHome?: boolean;
}

const HeaderNav: React.FC<IProps> = props => {
  return (
    <Navbar>
      {props.children}
      <HomeLink />
      <NavButton
        title="Criação de Personagem"
        options={[
          { name: "Passives", route: "/passive" },
          {
            name: "Attributes",
            route: "/attribute",
          },
          { name: "Life", route: "/life" },
          { name: "Stamina", route: "/stamina" },
        ]}
      />
      <NavButton title="Mundo" />
      <NavButton
        title="Crafting"
        options={[
          { name: "Potions", route: "/potion" },
          {
            name: "Spells",
            route: "/spell",
          },
          { name: "Wands", route: "/wand" },
          { name: "Brooms", route: "/broom" },
        ]}
      />
    </Navbar>
  );
};

export default HeaderNav;
