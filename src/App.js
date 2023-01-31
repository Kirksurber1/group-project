import React from 'react'
import Meme from './components/Meme'
import './style.css'
import MemeForm from './components/MemeForm'

export default function App(){

    // empty array used to store objects with meme data
    const [memeArray, setMemeArray] = React.useState([])

    // add meme data from MemeForm into memeArray
    function addMeme(meme) {
        setMemeArray((prevMemeArray) => {
            return [...prevMemeArray, meme]
        }) 
    }

    // update meme based on data from Meme component
    function updateMeme(id, updatedMeme) {
        setMemeArray(prevMemeArray => {
            return prevMemeArray.map((meme, index)=> {
                if (index === id){
                    return {...meme, updatedMeme}
                } else {
                    return meme
                }
            })
        })
    }

    // delete meme using meme ID
    function deleteMeme(id){
        setMemeArray(prevMemeArray=> {
            return prevMemeArray.filter((meme, index) => {
                return index !== id
            }
        )
    })
    }
    
    // map data from memeArray into an array of meme components
    const savedMemes = memeArray.map((meme, index)=> {
        return <Meme
            topText= {meme.topText}
            bottomText= {meme.bottomText}
            image= {meme.randomImage}
            id= {index}
            key= {index+meme.topText+meme.bottomText}
            isSaved={true}
            updateMeme={updateMeme}
            deleteMeme={()=>deleteMeme(index)}
        />
    })

    return(
        <div>
            <h1>Create a Meme</h1>
            <MemeForm 
                submit={addMeme}
            />
            <h1>Saved Memes</h1>
            {savedMemes}
        </div>
    )
}