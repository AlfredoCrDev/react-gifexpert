import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp() {

  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onAddCategory = (newCategory) =>{
    // Convertir todas las categorías existentes a minúsculas
    const lowerCaseCategories = categories.map(category => category.toLowerCase());
    // Verificar si la nueva categoría ya está presente
    if (lowerCaseCategories.includes(newCategory.toLowerCase())) return;    
    // Si no está presente, agregar la nueva categoría
    setCategories([newCategory, ...categories])
  }

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory= {onAddCategory}/>


      {
        categories.map( category => (<GifGrid key={ category } category={ category } />))
      }

    </>
  )
}

export default GifExpertApp