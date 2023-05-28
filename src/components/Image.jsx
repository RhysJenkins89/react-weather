import tokyo from '/assets/tokyo-jezael-melgoza-unsplash.jpg'

function Image() {
    return (
        <>
            <img className='image' src={tokyo} alt="City background image"/>
            <div className='overlay'></div>
        </>
    )
}

export default Image

