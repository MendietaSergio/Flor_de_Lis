import React from "react";
import Carousel from "../components/Carousel/Carousel";
import SocialNetworks from "../components/SocialNetworks/SocialNetworks";
import Button from "../components/Button/Button"
import Slider from "../components/Slider/Slider";

const Home = () => {
   
  
  return (
    <>
      <Carousel />
      <section className="row">
      <Slider title="Destacados" to="/productos" productOffer={true}/>
      <div className="d-flex justify-content-center my-5">
        <Button to="/productos" text="Ver más"/>
      </div>
        
      </section>
      <section className="row my-5">
        <Slider title="Ofertas" productOffer={true}/>
      </section>
      <section className="row">
        <SocialNetworks/>
      </section>
    </>
  );
};
export default Home;
