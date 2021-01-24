import { Row } from "../../Layouts/main";
import Navbar from "../../Layouts/main/HeaderNav";
import HomeLink from "../../components/HomeLink";
import Head from "next/head";
import InfoCard from "../../components/InfoCard";
import ExpandableItem from "../../components/ExpandableItem";
import { AnimateSharedLayout } from "framer-motion";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Wand's Core - Attributes</title>
        <link rel="icon" href="/magic_wand.ico" />
      </Head>
      <Row>
        <AnimateSharedLayout>
          <Navbar />
          <InfoCard title="Attributes">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vitae pretium nisi, eget facilisis nisi. Nam id urna nibh. Nullam et
            leo accumsan, laoreet augue a, hendrerit nisl. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Quisque vitae pretium nisi, eget
            facilisis nisi. Nam id urna nibh. Nullam et leo accumsan, laoreet
            augue a, hendrerit nisl. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra
          </InfoCard>
          <ExpandableItem title="Vigor">
            Reflete a resistência e aptidão física do personagem sua capacidade
            de resistir ao cansaço e exaustão física, também usado para medir a
            força e capacidade de carga do personagem, em feitiços pode ser
            usado para resistir além de ser pré-requisito para alguns feitiços.
          </ExpandableItem>
          <ExpandableItem title="Agilidade">
            Trata-se da habilidade corporal do personagem, capacidade de esquiva
            e também comanda o equilíbrio e furtividade, importante quando vai
            se aventurar escondido no castelo a noite.
          </ExpandableItem>
          <ExpandableItem title="Destreza">
            É a habilidade e precisão manual do personagem, o toque fino de um
            cirurgião, um bom cozinheiro ou alquimista tem que ser preciso no
            toque quando for necessário.
          </ExpandableItem>
          <ExpandableItem title="Mira">
            Como o nome já diz trata-se da mira do personagem, a facilidade que
            ele tem para acertar uma cesta de 3 pontos no basquete, acertar um
            feitiço direto geralmente utiliza a mira.
          </ExpandableItem>
          <ExpandableItem title="Percepção">
            A capacidade sensorial do personagem, o quanto é atento aos
            sentidos, importante em quase todo tipo de defesa, além de ser
            bastante útil para achar aquele livro na seção restrita.
          </ExpandableItem>
          <ExpandableItem title="Inteligência">
            Como o nome já diz, define a inteligência do personagem, o
            conhecimento e o raciocínio, é o principal atributo para aqueles que
            gostam de responder perguntas na sala de aula, buscar soluções, o
            atributo favorito dos corvinos.
          </ExpandableItem>
          <ExpandableItem title="Vontade">
            A determinação do personagem, o quanto ele sacrificaria pelos seus
            objetivos, isto impulsiona seus feitiços, o poder das magias, a
            capacidade de resistir a situações difíceis mentalmente, além de
            definir o quão forte poderá ser seu feitiço de patrono.
          </ExpandableItem>
          <ExpandableItem title="Carisma">
            O quão carismático é o personagem, também define o quão sortudo ele
            pode ser, não é recomendado a utilizar-se contra outros jogadores, a
            menos que seja para enganá-los como ao contar uma mentira
          </ExpandableItem>
        </AnimateSharedLayout>
      </Row>
    </>
  );
};
export default Index;
