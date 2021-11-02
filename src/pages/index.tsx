import type { NextPage } from "next";

import Catalogo from "../components/Catalogo";
import Header from "../components/Header";
import {Interface} from "../components/Interface";
import Footer from "../components/Footer";
import { Page } from "../components/page";
import InfoCart from "../components/InfoCart";

const Home: NextPage = () => {
  return (
    <Page title="JR AÇAI - Cardápio online" description="Peça seu açai do jeito mais fácil." path="/">
      <Interface>
      <Header />
      <Catalogo />
      <InfoCart />
      <Footer />
    </Interface>
    </Page>
  );
};

export default Home;
