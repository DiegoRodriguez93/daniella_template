import React from "react";
import TopBar from "./../../components/TopBar";
import NavBar from "./../../components/NavBar";
import Banner from "../../components/Banner";
import Separator from "../../components/Separator";
import Products from "../../components/Products";
import Promotion from "../../components/Promotion";

const Home = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Banner />
      <Separator text={"Nuevos"} />
      <Products />
      <Separator text={"Productos destactados"} />
      <Products />
      <Promotion />
    </>
  );
};

export default Home;
