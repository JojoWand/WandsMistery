import { Row } from "../../Layouts/main";
import Navbar from "../../Layouts/main/HeaderNav";
import Head from "next/head";
import InfoCard from "../../components/InfoCard";
import React from "react";
import ExpandableItem from "../../components/ExpandableItem";
import { AnimateSharedLayout } from "framer-motion";

interface ICondition {
  name: string;
  description: string;
}
const Index: React.FC = () => {
  const conditions: Array<ICondition> = [
    { name: "Caído", description: "" },
    { name: "Amedrontado", description: "" },
    { name: "Intimidado", description: "" },
    { name: "Perca de Sentido", description: "" },
    { name: "Posição Elevada", description: "" },
    { name: "Cercado", description: "" },
    { name: "Invisivel", description: "" },
    { name: "Ofuscado", description: "" },
    { name: "Distraido", description: "" },
    { name: "Cansado", description: "" },
    { name: "Exausto", description: "" },
    { name: "Queimando", description: "" },
    { name: "Congelando", description: "" },
    { name: "Esmagado", description: "" },
    { name: "Osso Quebrado", description: "" },
    { name: "Sufocado", description: "" },
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
          <InfoCard title="Condições">Descrever o que é uma condição.</InfoCard>
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
