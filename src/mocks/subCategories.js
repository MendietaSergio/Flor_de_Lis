const subCategories = [
    {
        id: 1,
        title: "Cuencos de madera",
        id_category: 1
    },
    {
        id: 2,
        title: "Vidrio",
        id_category: 1
    },
    {
        id: 3,
        title: "Ceramica",
        id_category: 1
    },
    {
        id: 4,
        title: "Cemento",
        id_category: 1
    }
]

const getFetchSubCategories = new Promise((res)=>{
    //aca tareas asincronicas
   
        setTimeout(()=>{
            res(subCategories)
        }, 2000)    
})
export default getFetchSubCategories;