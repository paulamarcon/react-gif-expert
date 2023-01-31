import { useEffect, useState } from "react"
import getGifs from "../helpers/getGifs"

//hook: función que devuelve algo
const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])


    return {
        //images, --> se puede poner solo eso si tiene el mismo nombre
        images: images,
        //isLoading, --> se puede poner solo eso si tiene el mismo nombre
        isLoading: isLoading
    }

}

export default useFetchGifs