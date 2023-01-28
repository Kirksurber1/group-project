import React from 'react'
import Meme from './components/Meme'
import './style.css'
import MemeForm from './MemeForm'
import './MemeForm.css'

export default function App(){

    const [memeArray, setMemeArray] = React.useState([])


    function addMeme (memes) {
        setMemeArray((prevMemeArray) => {
            return [memes, ...prevMemeArray]
        }) 
    }
    



    return(
        <div>
            <Meme 
                topText='One does not simply'
                bottomText='Walk into Mordor'
                image='http://i.imgflip.com/1bij.jpg'
            />
        </div>
    )
}