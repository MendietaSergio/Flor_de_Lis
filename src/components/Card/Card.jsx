import React from "react";
import Button from "../Button/Button";
import Producto_01 from "../../images/Products/img_productos_01.jpg"
import "./Card.css";
const Card = ({ product }) => {
  const pruebaCard = () => {
    console.log("Prueba desde Card: ");
    // console.log(product);
  };
  pruebaCard();
  return (
    <div className="col-6 col-md-4 col-lg-4 mb-1 h-100 my-4">
        <img
        className="card-img-top" src={Producto_01}
          title={product.img}
        />
      <div className="card-body shadow">
        <h6 className="card-title">{product.name}</h6>
        <p className="card-text">Categoria: {product.category}</p>
        <p className="card-text">Subcategoria: {product.subCategory}</p>
        <p className="card-text">Descripción: {product.descrition}</p>
        <div className="d-flex justify-content-between">
          <Button
            className="btn btn-success"
            to="https://web.whatsapp.com.ar"
            text="Consultar"
          ></Button>
        </div>
      </div>
    </div>
  );
};
export default Card;
