import React from "react";
import Slider from "../../Slider/Slider";
const Detail = ({ detail }) => {
  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="main-product-image">
          <img
            className="main-product-image"
            src={detail.picture}
            alt={detail.nameProduct}
          />
        </div>
      </div>
      <div className="col-lg-6 p-5 ">
        <div className="detail-title">
          <p>Precio {detail.price},00 por unid.</p>
        </div>
        <div className="d-flex justify-content-between">
          <a
            className="btn btn-success"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=+5492214092724&text=Hola%20Adri%20!%20Quiero%20saber%20sobre%20este%20producto%20${detail.name}.`}
          >
            Consultar
          </a>
        </div>
        <div className="detail-title">
          <p>Categoría: {detail.category}</p>
        </div>
        <div className="detail-title">
          <p>Subcategoría: {detail.subCategory}</p>
        </div>
        <div className="detail-title">
          <p>Descripción: {detail.description}</p>
        </div>
      </div>
      <div>
        <Slider
          title="Silimales"
          productEqual={detail}
          to={`/productos/${detail.category}`}
        />
      </div>
    </>
  );
};

export default Detail;
