import { Container } from "../../Layouts/main";
import Navbar from "../../Layouts/main/HeaderNav";
import HomeLink from "../../components/HomeLink";
import Head from "next/head";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Wand's Core - Passivas</title>
        <link rel="icon" href="/magic_wand.ico" />
      </Head>
      <Container>
        <Navbar />
      </Container>
    </>
  );
};
export default Index;
