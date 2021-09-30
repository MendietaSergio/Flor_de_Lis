const products = [
    {
        id:1,
        name:"producto_01",
        description:"descripcion_01",
        discount:"descuento_01",
        category:"Velas de soja",
        subCategory:"Cuencos de madera",
        img:"img_productos_01.jpg",
        price: 0,
        offer: 0,
        offerSection: true
    },
    {
        id:2,
        name:"producto_02",
        description:"descripcion_02",
        discount:"descuento_02",
        category:"Velas de soja",
        subCategory:"Cuencos de maderas",
        img:"img_productos_01.jpg",
        price: 0,
        offer: 0,
        offerSection: false
    },
    {
        id:3,
        name:"producto_03",
        description:"descripcion_03",
        discount:"descuento_03",
        category:"Velas de soja",
        subCategory:"Vidrio",
        img:"img_productos_01.jpg",
        price: 0,
        offer: 0,
        offerSection: true
    },
    {
        id:4,
        name:"producto_04",
        description:"descripcion_04",
        discount:"descuento_04",
        category:"Velas de soja",
        subCategory:"Ceramica",
        img:"img_productos_01.jpg",
        price: 0,
        offer: 0,
        offerSection: false
    },
    {
        id:5,
        name:"producto_05",
        description:"descripcion_05",
        discount:"descuento_05",
        category:"Velas de soja",
        subCategory:"Cemento",
        img:"img_productos_01.jpg",
        price: 0,
        offer: 0,
        offerSection: true
    },
    {
        id:6,
        name:"producto_05",
        description:"descripcion_05",
        discount:"descuento_05",
        category:"Cartas de aromas",
        subCategory:null,
        img:"img_productos_01.jpg",
        price: 0,
        offer: 0,
        offerSection: true
    },
    {
        id:7,
        name:"producto_05",
        description:"descripcion_05",
        discount:"descuento_05",
        category:"Cartas de aromas",
        subCategory: null,
        img:"img_productos_01.jpg",
        price: 0,
        offer: 0,
        offerSection: true
    },
    {
        id:8,
        name:"producto_05",
        description:"descripcion_05",
        discount:"descuento_05",
        category:"Lamparas de sal",
        subCategory: null,
        img:"img_productos_01.jpg",
        price: 0,
        offer: 0,
        offerSection: true
    },
    {
        id:9,
        name:"producto_05",
        description:"descripcion_05",
        discount:"descuento_05",
        category:"Cartas de aromas",
        subCategory:null,
        img:"img_productos_01.jpg",
        price: 0,
        offer: 0,
        offerSection: true
    },
]
const getFetch = new Promise((res)=>{
    //aca tareas asincronicas
   
        setTimeout(()=>{
            res(products)
        }, 2000)    
})
export default getFetch;