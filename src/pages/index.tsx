import type { NextPage } from "next";
import Head from "next/head";
import Catalogo from "../components/Catalogo";

import Header from "../components/Header";
import {Interface} from "../components/Interface";

const Home: NextPage = () => {
  return (
    <Interface>
      <Head>
        <title>JR Açai - Cardapio online</title>
      </Head>
      <Header />
      <Catalogo />
    </Interface>
  );
};

export default Home;
