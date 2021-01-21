import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Head>
        <title>Wands Core</title>
        <link rel="icon" href="/magic_wand.ico" />
      </Head>

      <main>
        <Image
          src="/magic_wand.svg"
          alt="Picture of the author"
          width={50}
          height={50}
        />
        <button onClick={() => setCount(count + 1)}>Add Count</button>
        {count}
      </main>
    </div>
  );
};
export default Home;
