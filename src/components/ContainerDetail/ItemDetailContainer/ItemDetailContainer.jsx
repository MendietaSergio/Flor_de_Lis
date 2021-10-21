import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../../services/getFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'
const ItemDetailContainer = ( ) =>{
    const { idProduct} = useParams()
    const [ detailProduct, setDetailProduct] = useState({})
    const [showDetailFail, setShowDetailFail] = useState(true)
    const [ message, setMessage ] = useState('')

    useEffect(() => {
        const dbQuery = getFirestore()
        const filterProduct = async() =>{
            if(idProduct){
                await dbQuery.collection("items").doc(idProduct).get() //Traigo el producto desde el id.
                    .then((resp) => {
                        if (resp.data() != null) {
                        setDetailProduct({ id: resp.id, ...resp.data() }); //Seteo el nuevo array.
                        setShowDetailFail(false);
                        } else {
                        setShowDetailFail(true);
                        messageTime()
                        }
                    })
                    .catch((err) => console.log("ERROR => ", err));
            }
        }
        filterProduct()
    }, [idProduct])
    const messageTime = () =>{
        setTimeout((setMessage("El producto no existe")),4000)
    }
    return(
        <>
            {showDetailFail ? (
                <div className="detail-loading">
                <h2 className="text-center my-4">
                  {message}
                </h2>
              </div>
            ):(
                <ItemDetail detail={detailProduct} />
            )}
        </>
    ) 
}

export default ItemDetailContainer;