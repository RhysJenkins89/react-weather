import { useEffect, useState } from 'react'
import tokyo from '/assets/tokyo-jezael-melgoza-unsplash.jpg'
import london from '/assets/london-anthony-delanoix-unsplash.jpg'
import santiago from '/assets/santiago-juan-pablo-ahumada-unsplash.jpg'
import paris from '/assets/paris-john-towner-unsplash.jpg'
import hongKong from '/assets/hong-kong-chapman-chow-unsplash.jpg' 

function Image() {
    const [imageData, setImageData] = useState({})

    useEffect(() => {
        const getRandomImage = () => {
            const images = [
                {city: tokyo, credit: 'Jezael Melgoza'},
                {city: london, credit: 'Anthony Delanoix'},
                {city: santiago, credit: 'Juan Pablo Ahumada'},
                {city: paris, credit: 'John Towner'},
                {city: hongKong, credit: 'Chapman Chow'},
            ]
            const randomNum = Math.floor(Math.random() * 5)
            setImageData(images[randomNum])
        }

        getRandomImage()
    }, [])

    return (
        <>
            <img className='image' src={imageData.city} alt="City background image"/>
            <div className='overlay'></div>
            <p className='credit-text'>Photo credit: {imageData.credit} at Unsplash</p>
        </>
    )
}

export default Image

