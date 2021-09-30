import React from "react";
import Carousel from "../components/Carousel/Carousel";
import SocialNetworks from "../components/SocialNetworks/SocialNetworks";
import Footer from "../components/Footer/Footer";
import { ItemListContainer } from "../components/Containers/ItemListContainer/ItemListContainer";
import Offer from "../components/Containers/Offer/Offer";

const Home = () => {
   
  
  return (
    <>
      <Carousel />
      <section className="row">
        <ItemListContainer title="Productos"/> 
      </section>
      <section className="row my-5">
        <Offer/>
      </section>
      <section className="row">
        <SocialNetworks/>
      </section>
      <Footer/>
    </>
  );
};
export default Home;
