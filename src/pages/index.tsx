import type { NextPage } from "next";
import Catalogo from "../components/Catalogo";

import Header from "../components/Header";
import {Interface} from "../components/Interface";
import { Page } from "../components/page";

const Home: NextPage = () => {
  return (
    <Page title="JR AÇAI - Cardapio online" description="Peça seu açai do jeito mais fácil." path="/">
      <Interface>
      <Header />
      <Catalogo />
    </Interface>
    </Page>
  );
};

export default Home;
