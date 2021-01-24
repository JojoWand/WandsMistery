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
        <title>Wand's Core - Passivas</title>
        <link rel="icon" href="/magic_wand.ico" />
      </Head>
      <Row layout>
        <AnimateSharedLayout>
          <Navbar />
          <InfoCard title="Passives">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vitae pretium nisi, eget facilisis nisi. Nam id urna nibh. Nullam et
            leo accumsan, laoreet augue a, hendrerit nisl. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Quisque vitae pretium nisi, eget
            facilisis nisi. Nam id urna nibh. Nullam et leo accumsan, laoreet
            augue a, hendrerit nisl. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra
          </InfoCard>
          <ExpandableItem title="Defesa Corporal">
            Mesmo com todos sabendo a realidade de um universo de magia onde
            feitiços que literalmente matam ao acertar existem aqueles únicos
            momentos onde uma defesa corporal pode vir a calhar, nascidos
            trouxas não tem uma cultura de duelos definidos, e quando se irritam
            podem muito bem partir para o combate físico, alguns feitiços também
            podem explicitar que a defesa corporal é algo válido na defesa.
          </ExpandableItem>
          <ExpandableItem title="Esquiva">
            O melhor dos mundos, esquivar-se é uma habilidade versátil quando o
            assunto é evitar o perigo, esquivar-se de lampejos de feitiços,
            golpes físicos e fenômenos que durante a trama podem vir a trazer
            complicações ao na maioria das situações, esquivar-se é uma escolha
            viável e com menos custo.
          </ExpandableItem>
          <ExpandableItem title="Bloqueio de Lampejos">
            Na maioria das vezes que um feitiço é lançado, um feixe de luz surge
            com o feitiço, este feixe é aquele brilho que pode ter várias cores,
            e no mundo de HP é comumente chamado de Lampejo, quando acertam o
            alvo o feitiço que gerou este lampejo é ativado, é possível esquivar
            deste lampejo, assim esquivando do feitiço, mas a trajetória dele
            também pode ser alterada, ou simplesmente bloqueada por feitiços de
            escudo, sendo o mais comum o protego. Com este feitiço é possível
            desviar feitiços utilizando a varinha, ricocheteando para longe até
            que se desfaça naturalmente. Dentro do bloqueio de lampejos há
            várias formas de defender, a forma padrão onde não há rolagem é
            utilizando o feitiço Protego de forma não verbal, onde somente
            lampejos são desviados outras formas de defender são descritas nos
            próprios feitiços que liberam estas formas.
          </ExpandableItem>
          <ExpandableItem title="Percepção Passiva">
            Certos momentos do jogo personagens podem estar esgueirando-se,
            inimigos se aproximando, várias situações podem cogitar a ideia de
            alguém perceber algo que não estava procurando. Não estava
            procurando, é o fator principal da rolagem, muitas vezes o mestre
            planeja emboscadas que ao pedir para os jogadores rolarem percepção
            revela esta possível intenção de uma armadilha, com a percepção
            passiva o mestre pode rolar testes de furtividade e outros testes no
            privado e conferir com a percepção passiva dos players e sem que
            eles saibam já fizeram o teste de percepção. É importante salientar
            que quando o jogador está ativamente procurando algo ele mesmo pode
            rolar percepção e então irá enfrentar o valor do inimigo. Quando
            isso acontece o valor de percepção tirado no teste serve como
            percepção passiva, então mesmo que tire um valor menor que a
            passiva, este valor menor deve ser usado na ocasião.
          </ExpandableItem>
        </AnimateSharedLayout>
      </Row>
    </>
  );
};
export default Index;
