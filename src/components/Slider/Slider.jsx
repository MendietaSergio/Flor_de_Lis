import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";
import Title from "../Title/Title";
import ItemSlider from "./ItemSlider/ItemSlider";
import "./Slider.css";

const Slider = ({
  title,
  to,
  productFeatured = false,
  productOffer = false,
  productEqual,
}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dbQuery = getFirestore()
  const fetProductsFeatured = async () => {
    await dbQuery
      .collection("items")
      .where("productFeatured", "==", true)
      .get() //llamo a todos los datos que tiene la coleccion 'items'
      .then((resp) => {
        setProducts(resp.docs.map((item) => ({ id: item.id, ...item.data() })));
      })
      .catch((err) => console.log("ERROR => ", err));
  };
  const fetProductsOffer = async () => {
    await dbQuery
      .collection("items")
      .where("offer", "==", true)
      .get() //llamo a todos los datos que tiene la coleccion 'items'
      .then((resp) => {
        setProducts(resp.docs.map((item) => ({ id: item.id, ...item.data() })));
      })
      .catch((err) => console.log("ERROR => ", err));
  };
  const fetProductsEquals = async () => {
    await dbQuery
      .collection("items")
      .where("category", "==", productEqual.category)
      .get() //llamo a todos los datos que tiene la coleccion 'items'
      .then((resp) => {
        setProducts(resp.docs.map((item) => ({ id: item.id, ...item.data() })));
      })
      .catch((err) => console.log("ERROR => ", err));
  };
  useEffect(() => {
    if (productFeatured) {
      fetProductsFeatured();
    } else if (productOffer) {
      fetProductsOffer();
    } else {
      fetProductsEquals();
    }
    setLoading(false);
  }, []);

  return (
    <>
      <div className="row">
        <div className="container my-5">
          {loading ? (
            <i className="fas fa-spinner fa-pulse" />
          ) : (
            <>
              <Link className="title-products-home" to={to ? to : "#"}>
                <Title className="my-3" text={title} />
              </Link>
              <div className="col-12">
                <section className="slider">
                  {products.map((product) => (
                    <ItemSlider
                      product={product}
                      key={product.id}
                      productFeatured={productFeatured}
                      productOffer={productOffer}
                    />
                  ))}
                </section>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Slider;
