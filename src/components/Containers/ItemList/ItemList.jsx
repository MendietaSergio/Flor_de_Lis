import Card from "../Card/Card";


const ItemList =({products} ) =>{
    return(
        <>
        <div className="row">
            {products.map(product => 
            <Card product={product}/>
        )}
        </div>
        </>
    )

}

export default ItemList;