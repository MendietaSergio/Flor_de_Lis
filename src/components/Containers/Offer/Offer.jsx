import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getFetch from "../../../mocks/products";
import ItemList from "../ItemList/ItemList";
import Title from "../../Title/Title";
const Offer = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();
  const { idSubCategory } = useParams();
  useEffect(() => {
    const fetProducts = async () => {
        await getFetch
          .then((respuesta) => {
            setProducts(
              respuesta.filter(
                (ofert) => ofert.offerSection === true
              )
            );
            setLoading(false);
          })
          .catch((error) => console.log(error))
    };
    fetProducts();
    console.log("products");
  }, []);
  return (
    <>
      <Title text="Ofertas" />
      <div className="container">
        {loading ? (
          <i className="fas fa-spinner fa-pulse" />
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </>
  );
};
export default Offer;
