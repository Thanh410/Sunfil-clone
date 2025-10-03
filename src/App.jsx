import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { Products } from "./components/Products/Products";
import { FeatureList } from "./components/FeatureList/FeatureList";
import { Explorer } from "./components/Explorer/Explorer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="app">
        <Banner />
        <Products />
        <FeatureList />
        <Explorer />
      </div>
      <Footer />
    </div>
  );
};
export default App;
