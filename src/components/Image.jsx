import { useEffect, useState } from 'react'
import tokyo from '/assets/tokyo-jezael-melgoza-unsplash.jpg'
import london from '/assets/london-anthony-delanoix-unsplash.jpg'
import santiago from '/assets/santiago-juan-pablo-ahumada-unsplash.jpg'
import paris from '/assets/paris-john-towner-unsplash.jpg'
import hongKong from '/assets/hong-kong-chapman-chow-unsplash.jpg' 

function Image() {
    const [imageSrc, setImageSrc] = useState(null)

    useEffect(() => {
        const getRandomImage = () => {
            const images = [tokyo, london, santiago, paris, hongKong]
            const randomNum = Math.floor(Math.random() * 5)
            setImageSrc(images[randomNum])
        }

        getRandomImage()
    }, [])

    return (
        <>
            <img className='image' src={imageSrc} alt="City background image"/>
            <div className='overlay'></div>
        </>
    )
}

export default Image

