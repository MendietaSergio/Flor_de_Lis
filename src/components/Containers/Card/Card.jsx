import React from "react";
import Producto_01 from "../../../images/Products/img_productos_01.jpg";
import "./Card.css";
const Card = ({ 
  product }) => {
  return (
    <div className="col-12 col-md-3 col-lg-3 mb-1 my-4">
      <div className="card d-block w-100">
        <img className="card-img-top" src={Producto_01} title={product.img} />
        <div className="card-body d-block w-100 shadow">
          <h6 className="card-title">{product.name}</h6>
          <p className="card-text">Categoria: {product.category}</p>
          <p className="card-text">Subcategoria: {product.subCategory}</p>
          <div className="d-flex justify-content-between">
            <a
              className="btn btn-success"
              text="Consultar"
              rel="noopener noreferrer"
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=+5492214092724&text=Hola%20Adri%20!%20Quiero%20saber%20sobre%20este%20producto%20${product.name}.`}
            >
              Whatssap
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
