import React from "react";
import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { Products } from "./components/Products/Products";
import { FeatureList } from "./components/Feature/FeatureList/FeatureList";
import { Explorer } from "./components/Explorer/Explorer";

const App = () => {
  return (
    <div>
      <Header />
      <main className="app">
        <Banner />
        <Products />
        <FeatureList />
        <Explorer />
      </main>
      <Footer />
    </div>
  );
};
export default App;
