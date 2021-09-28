import React,{useEffect, useState} from "react";
import { useParams } from "react-router";
import getFetch from "../../../mocks/products";
import ItemList from "../ItemList/ItemList";
import Title from "../../Title/Title";
export const ItemListContainer = ( ) =>{

    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const {idCategory} = useParams();
    const {idSubCategory} = useParams()
    useEffect(() => {
        const fetProducts = async() =>{
            if(idCategory){
                await getFetch
                    .then(respuesta =>{
                        setProducts(respuesta.filter(idCategory => idCategory.category === idCategory))
                        setLoading(false);
                    })
                    .catch(error => console.log(error))
                    .finally(setLoading(false))
                if(idSubCategory){
                        await getFetch
                        .then(respuesta =>{
                            setProducts(respuesta.filter(idsubcategory =>idsubcategory.subCategory === idSubCategory))
                            setLoading(false)  
                        })
                        .catch(error=>{
                            console.log(error);
                        })
                        .finally(() =>setLoading(false))
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
          <Title text="Destacado" />
            <div className="container">
                {loading ? 
                <i className="fas fa-spinner fa-pulse" /> 
                : (
                    <ItemList products={products}/>
                )}

            </div>

        </>

    )

}