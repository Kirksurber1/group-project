import React from "react";
import './MemeForm.css'

function MemeForm (props) {

    

    const [meme, setMeme] = React.useState({
        id: "",
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeIMages] = React.useState([])

    React.useEffect (() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeIMages(data.data.memes) )
    }, [] )

    console.log(allMemeImages)

    function getNewImage (event) {
        event.preventDefault()

            const random = Math.floor(Math.random() * allMemeImages.length)
            const url = allMemeImages[random].url
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url,
                
            }))
    }
    function handleChange (event) {
        const {name, value} =event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
    }) )
    }

    function handleSubmit (event) {
        event.preventDefault()
        /// send to api
        const memeData = {
            topText: meme.topText,
            bottomText: meme.bottomText, 
            randomImage: meme.randomImage,
            id: Math.random().toString()
        }

     // console.log(memeData)
      //set
        
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
                    value={meme.topText}
                    onChange= {handleChange}
                    ></input>
                    <input 
                    type="text" 
                    placeholder="Bottom Text"
                    className="memeInput"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    ></input>
                    <button onClick={getNewImage}>Refresh Meme</button>
                    <button>Add to List</button>
                </form>
            </div>
            <div className="memeDisplay">
                <div className="imageBox">
                    <img src={meme.randomImage} className="memeImage" alt="random"/>
                    <h2 className="memeText top">{meme.topText}</h2>
                    <h2 className="memeText bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </div>
    )
}


export default MemeForm