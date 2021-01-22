import Head from "next/head";
import React, { useState } from "react";
import NavBar from "../components/Navbar";
import NavButton from "../components/NavButton";
import WelcomeCard from "../components/WelcomeCard";
import { Container } from "../Layouts/main";
import HeaderNav from "../Layouts/main/HeaderNav";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Wand's Core</title>
        <link rel="icon" href="/magic_wand.ico" />
      </Head>
      <Container>
        {/* Header */}
        <HeaderNav isHome></HeaderNav>
        <WelcomeCard title="Wand's Core" createdBy="JojoWand">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
          pretium nisi, eget facilisis nisi. Nam id urna nibh. Nullam et leo
          accumsan, laoreet augue a, hendrerit nisl. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra
        </WelcomeCard>
        <NavBar>
          <NavButton title="Feitiços" />
          <NavButton title="Poções" />
          <NavButton title="Vassouras" />
          <NavButton title="Varinhas" />
        </NavBar>
      </Container>
    </>
  );
};
export default Home;
