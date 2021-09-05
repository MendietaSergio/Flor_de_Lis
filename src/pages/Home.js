import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import Carousel from "../components/Carousel/Carousel";
import Title from "../components/Title/Title";
import Products from "../mocks/products";
import Offer from "../components/Offer/Offer";
import SocialNetworks from "../components/SocialNetworks/SocialNetworks";
import Footer from "../components/Footer/Footer";

const Home = () => {
  // const [product, setProduct ] = useState([]);
  // const [refresh, setRefresh ] = useState(true);
  const prueba = () => {
    if (Products.offerSection) {
      console.log("OFertas: ", Products.offerSection);
    }
  };
  // useEffect(() =>{
  //   const OfferSection =()=>{

  //   }
  // })
  prueba();
  return (
    <>
      <Carousel />
      <Title text="Destacado" />
      <section className="row">
        {Products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </section>
      <section className="row my-5">
        <Title text="Ofertas" />

        {Products.map((product) => {
          if (product.offerSection) {
            console.log(product.name);
            return <Card product={product} key={product.id} />;
          }
        })}
      </section>
      <section className="row">
        <SocialNetworks/>

      </section>
      <Footer/>
    </>
  );
};
export default Home;
