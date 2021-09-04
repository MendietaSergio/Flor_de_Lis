import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import Carousel from "../components/Carousel/Carousel";
import Title from "../components/Title/Title";
import Products from "../mocks/products";

const Home = () => {
  // const [product, setProduct ] = useState([]);
  // const [refresh, setRefresh ] = useState(true);
  const prueba = () => {
    console.log(Products);
  };
  prueba();
  return (
    <>
      <Carousel />
      <Title text="Destacado" />
      <section className="row">
        {/* <Card Products={Products}/> */}
        {Products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </section>
    </>
  );
};
export default Home;
