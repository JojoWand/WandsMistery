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
        title="Character"
        options={[
          { name: "Passives", route: "/passive" },
          {
            name: "Attributes",
            route: "/attribute",
          },
          { name: "Life", route: "/life" },
          { name: "Stamina", route: "/stamina" },
          { name: "Conditions", route: "/condition" },
          { name: "Origin", route: "/origin" },
        ]}
        route="/character"
      />
      <NavButton title="World" route="/world" />
      <NavButton
        title="Crafting"
        options={[
          { name: "Potions", route: "/crafting/potion" },
          {
            name: "Spells",
            route: "/crafting/spell",
          },
          { name: "Wands", route: "/crafting/wand" },
          { name: "Brooms", route: "/crafting/broom" },
        ]}
        route="/crafting"
      />
    </Navbar>
  );
};

export default HeaderNav;
