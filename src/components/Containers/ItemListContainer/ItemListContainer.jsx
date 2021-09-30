import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import getFetch from "../../../mocks/products";
import ItemList from "../ItemList/ItemList";
import Title from "../../Title/Title";
export const ItemListContainer = ({title}) =>{

    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ titleProduct, setTitleProduct ] = useState(title)
    const {idCategory} = useParams();
    const {idSubCategory} = useParams()
    useEffect(() => {
        const fetProducts = async() =>{
            if(idCategory){
                await getFetch
                    .then(respuesta =>{
                        setProducts(respuesta.filter(idCategorie => idCategorie.category === idCategory))
                        setLoading(false);
                        setTitleProduct(idCategory);
                    })
                    .catch(error => console.log(error))
                    .finally(()=>{
                        setLoading(false)

                    })
                if(idSubCategory){
                        await getFetch
                        .then(respuesta =>{
                            setProducts(respuesta.filter(idsubcategory =>idsubcategory.subCategory === idSubCategory))
                            setLoading(false)
                            setTitleProduct(idSubCategory)

                        })
                        .catch(error=>{
                            console.log(error);
                        })
                        .finally(() =>{
                            setLoading(false)
                        })
                }
            
            } else {
                await getFetch
               .then(respuesta =>{
                   setProducts(respuesta)
                   setLoading(false)  
                })
                .catch(error=>{
                    console.log(error);
                })
                .finally(() =>setLoading(false))
            }
        }
        fetProducts()
    }, [idCategory])

    return (
        <>
          
          {loading ? 
            (<div className="text-center">
                <h1>Cargando....<i className="fas fa-spinner fa-pulse " ></i></h1>
            </div>
        ):(
            <>
            <Title text={titleProduct} />
            <div className="container">
                <ItemList products={products}/>
            </div>
            </>
        )}
        </>

    )

}