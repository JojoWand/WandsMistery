import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Wands Core</title>
        <link rel="icon" href="/magic_wand.ico" />
      </Head>
      {/* <Container>
        <Header>
          <CriacaoDePersonagemButton />
          <MundoButton />
          <CraftingButton />
        </Header>
        <WelcomeCard />
        <Footer>
          <FeiticosButton />
          <PocoesButton />
          <VassourasButton />
          <VarinhasButton />
        </Footer>
      </Container> */}
    </>
  );
};
export default Home;
