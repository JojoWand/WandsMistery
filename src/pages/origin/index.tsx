import { Row } from "../../Layouts/main";
import Navbar from "../../Layouts/main/HeaderNav";
import Head from "next/head";
import InfoCard from "../../components/InfoCard";
import React from "react";
import ExpandableItem from "../../components/ExpandableItem";
import { AnimateSharedLayout } from "framer-motion";

interface IOrigin {
  name: string;
  description: string;
}
const Index: React.FC = () => {
  const conditions: Array<IOrigin> = [
    { name: "Nascido-Trouxa", description: "" },
    { name: "Sangue-Puro", description: "" },
    { name: "Mestiço", description: "" },
    { name: "Sagrados Vinte e Oito", description: "" },
  ];
  return (
    <>
      <Head>
        <title>Wand's Core - Passivas</title>
        <link rel="icon" href="/magic_wand.ico" />
      </Head>
      <Row layout>
        <AnimateSharedLayout>
          <Navbar />
          <InfoCard title="Origin">Descrever as origens</InfoCard>
          {conditions.map(cond => (
            <ExpandableItem title={cond.name}>
              {cond.description || "501 - Not Implemeted"}
            </ExpandableItem>
          ))}
        </AnimateSharedLayout>
      </Row>
    </>
  );
};
export default Index;
