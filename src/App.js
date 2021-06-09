import React from "react";
import Layout from "./components/Layout";
import PokemonGrid from "./components/PokemonGrid";
import "./App.scss";

export function App() {
  return (
    <Layout>
      <header className="header">
        <h1 className="header__title">My Pokemon Catalog</h1>
        <PokemonGrid />
      </header>
    </Layout>
  );
}
