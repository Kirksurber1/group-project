import React from "react";
import './MemeForm.css'
import Meme from './components/Meme'

function MemeForm (props) {

    // initializing empy Meme with default image
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
    
    const [savedMemes, setSavedMemes] = React.useState([])

    function deleteMeme(id){
        setSavedMemes(prevSavedMemes=> prevSavedMemes.filter(
            savedMeme => savedMeme.props.id !== id
        ))
    }

    function editMeme(id){
        console.log(`editing ${id}`)
    }

    function handleSubmit (event) {
        const id = Math.random().toString()
        event.preventDefault()
        /// send to api
        const newMeme = <Meme
            topText= {meme.topText}
            bottomText= {meme.bottomText}
            image= {meme.randomImage}
            id= {id}
            key= {id}
            editMeme= {()=>editMeme(id)}
            deleteMeme={()=>deleteMeme(id)}
            isSaved={true}
        />

        setSavedMemes(prevSavedMemes=>[...prevSavedMemes, newMeme])
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
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom Text"
                        className="memeInput"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button onClick={getNewImage}>Refresh Meme</button>
                    <button>Add to List</button>
                </form>
            </div>
            <div className="memeDisplay">
                <Meme 
                    image={meme.randomImage}
                    topText={meme.topText}
                    bottomText={meme.bottomText}
                    isSaved={false}
                />
            </div>
            <h1>Saved Memes</h1>
            {savedMemes}
        </div>
    )
}


export default MemeForm