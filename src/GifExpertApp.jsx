import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"
//Usando el archivo de barril creado (index.js), quedaría solo esta línea pero no me anda.
//Me parece que es porque uso el export default.
//import { AddCategory, GifGrid } from "./components"

const GifExpertApp = () => {

const [categories, setCategories] = useState(['bilbo'])

const onAddCategories = (newCategory) => {
    //verifica que no exista ya la categoría ingresada
    if (!(categories.includes(newCategory))) {
        //...categories hace copia del vector y luego agrega 'three'
        setCategories([...categories, newCategory])
    }    
}

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategories={onAddCategories}/>

            {/* llaves indican que es expresión de js */}
            {categories.map(category => (
                    <GifGrid key={category} category={category}/>
            ))}
             
         

        
        </>
    )
}

export default GifExpertApp