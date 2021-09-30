import { ItemListContainer } from "../components/Containers/ItemListContainer/ItemListContainer";
import { Link, useParams } from "react-router-dom"

const Products = ({title}) =>{
    const {idCategory} = useParams()
    const {idSubCategory} = useParams()
    return (
        <>
            <div className="routes">
                <span className="link-page">
                    <Link to="/">Home <i class="fas fa-chevron-right"></i></Link>
                    {idCategory ? (
                        <Link to="/productos">Productos <i class="fas fa-chevron-right"></i></Link>
                    ):(
                        null
                    )}
                    {idCategory && idSubCategory ? (
                    <Link to={`/productos/${idCategory}`}>{idCategory}<i class="fas fa-chevron-right"></i></Link>
                    ):(
                        null
                    )}

                </span>
            </div>
            <ItemListContainer title={title}/>
        </>
    )
}

export default Products;