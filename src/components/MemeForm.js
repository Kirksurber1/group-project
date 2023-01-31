import React from "react";
import './MemeForm.css'
import Meme from './Meme'

function MemeForm (props) {

    // initializing object with meme input data
    const [memeInputs, setMemeInputs] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    // updates when changes are detected in input boxes
    function handleChange (event) {
        const {name, value} =event.target
        setMemeInputs(prevMeme => ({
            ...prevMeme,
            [name]: value
    }) )
    }

    // empty array to hold meme images from API
    const [allMemeImages, setAllMemeIMages] = React.useState([])

    // fetch images from API
    React.useEffect (() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeIMages(data.data.memes) )
    }, [] )

    // refresh image to a new random image from allMemeImages
    function getNewImage (event) {
        event.preventDefault()
        const random = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[random].url
        setMemeInputs(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
    }

    // submit meme to Saved Memes
    function handleSubmit (event) {
        event.preventDefault()
        props.submit(memeInputs);
        setMemeInputs({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        })
    }
    

    return (
        <div className="memeGeneration">
            <div className="memeInput">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Top Text"
                        className="memeInput"
                        name="topText"
                        value={memeInputs.topText}
                        onChange= {handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom Text"
                        className="memeInput"
                        name="bottomText"
                        value={memeInputs.bottomText}
                        onChange={handleChange}
                    />
                    <button onClick={getNewImage}>Refresh Meme</button>
                    <button>Add to List</button>
                </form>
            </div>
            <div className="memeDisplay">
                <Meme 
                    image={memeInputs.randomImage}
                    topText={memeInputs.topText}
                    bottomText={memeInputs.bottomText}
                    isSaved={false}
                />
            </div>
        </div>
    )
}


export default MemeForm