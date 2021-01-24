import { Row } from "../../Layouts/main";
import Navbar from "../../Layouts/main/HeaderNav";
import Head from "next/head";
import InfoCard from "../../components/InfoCard";
import React from "react";
import ExpandableItem from "../../components/ExpandableItem";
import { AnimateSharedLayout } from "framer-motion";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Wand's Core - Life</title>
        <link rel="icon" href="/magic_wand.ico" />
      </Head>
      <Row>
        <AnimateSharedLayout>
          <Navbar />
          <InfoCard title="Life">501 - Descrição da Vida</InfoCard>
          <ExpandableItem title="Vida Inicial">
            Vidia inicial do personagem.
          </ExpandableItem>
          <ExpandableItem title="Regeneração de vida">
            Padrões de regeneração de vida.
          </ExpandableItem>
        </AnimateSharedLayout>
      </Row>
    </>
  );
};
export default Index;
