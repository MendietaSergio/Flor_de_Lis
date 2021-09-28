import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Containers/Card/Card";
import Carousel from "../components/Carousel/Carousel";
import Title from "../components/Title/Title";
import Products from "../mocks/products";
import SocialNetworks from "../components/SocialNetworks/SocialNetworks";
import Footer from "../components/Footer/Footer";
import { ItemListContainer } from "../components/Containers/ItemListContainer/ItemListContainer";
import Offer from "../components/Containers/Offer/Offer";

const Home = () => {
  const [productOfert, setProductOfert ] = useState([]);
  // const [refresh, setRefresh ] = useState(true);
  
  useEffect(() =>{
    
  },[])//para que me refresque una vez
  
  return (
    <>
      <Carousel />
      <section className="row">
        <ItemListContainer /> 
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
