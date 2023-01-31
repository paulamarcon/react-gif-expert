import { useState } from "react"


const AddCategory = ({onAddCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const onImputChange = (e) => {
        setInputValue(e.target.value)       
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (inputValue.length >= 1){ 
            onAddCategories(inputValue.trim())
        }
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input 
                type="text" 
                placeholder="Buscar gif"   
                onChange={ (e) => onImputChange(e)}
            />
        </form>
    )
}

export default AddCategory