const categories = [
    {
        id:1,
        title:"Velas de soja",
        subCategory: true
    },
    {
        id:2,
        title:"Cartas aromas",
        subCategory: false
    },
    {
        id:3,
        title:"Lamparas de sal",
        subCategory: false
    }
]
const getFetchCategories = new Promise((res)=>{
    //aca tareas asincronicas
   
        setTimeout(()=>{
            res(categories)
        }, 2000)    
})
export default getFetchCategories;