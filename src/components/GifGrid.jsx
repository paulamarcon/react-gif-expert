//import { useEffect, useState } from "react"

//import getGifs from "../helpers/getGifs"
import GifItem from "./GifItem"
import useFetchGifs from "../hooks/useFetchGifs"


const GifGrid = ({category}) => {

    //custom hook
    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h2>{ category }</h2>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {/* OTRA FORMA
                images.map(img => 
                    <li key={img.id}>{img.title}</li>
                )*/}
                
                {
                images.map( (img) => 
                    //...img sirve para esparcir las props de img, se usa cuando son muchas props 
                    //Del otro lado se puede agarrar de a una
                    <GifItem key={img.id} {...img}/>
                )}

            </div>
        </>
    )
}

export default GifGrid