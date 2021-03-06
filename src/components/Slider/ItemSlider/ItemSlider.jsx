import React from "react";
import { Link } from "react-router-dom";
import Img from "../../../images/Products/img_productos_01.jpg"
const ItemSlider =({
    product,
    productFeatured,
    productOffer
}) =>{
    return(
        <div className="col-12 col-md-3">
            <div key={product.id} className="card mx-2">
            <Link className="card-link-detail" to={`/detalle/${product.id}`}>
                    <img className="card-img-top" src={Img} alt={product.nameProduct}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.nameProduct}</h5>
                    </div>
                    <div className="card-footer text-center">
                        {product.discount >0 ?
                        (
                            <>
                                <h6><strike>{product.price}</strike></h6>
                                <h3 className="card-title-offer ">{product.price - (product.price*product.discount/100)}</h3>
                            </>
                        ) : (
                            <h3 className="my-4" >{product.price}</h3>
                            
                        ) } 
                        
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ItemSlider;