import React from "react";
import { Link } from "react-router-dom";
import Detail from "../Detail/Detail";
import './ItemDetail.css'
const ItemDetail = ({detail} ) =>{
    return (
        <>
            <h5 className="text-center mt-5 mb-5">{detail.nameProduct}</h5>
            <span className="link-page">
                <Link to="/">Home<i className="fas fa-chevron-right"></i></Link>
                <Link to="/productos">Productos<i className="fas fa-chevron-right"></i></Link>
                <Link to={`/productos/${detail.category}`}>{detail.category}<i className="fas fa-chevron-right"></i></Link>
                <Link to={`/productos/${detail.category}/${detail.subCategory}`}>{detail.subCategory}</Link>
                </span>
            <div key={detail.id} className="row  mt-2" >
                <Detail detail={detail}/>
           </div>
        </>

    )
}
export default ItemDetail