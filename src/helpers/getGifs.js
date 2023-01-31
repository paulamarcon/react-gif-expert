
//este tipo de funciones nunca debe ir dentro del functional component porque cada vez que se renderice se va a ejecutar
const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=WFePrzkN992vscQvmfPyG3P5Q580RPB1&q=${category}&limit=20`
    const res = await fetch(url)
    const { data } = await res.json()

    //me quedo con esos datos nomás de cada gif
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}

export default getGifs