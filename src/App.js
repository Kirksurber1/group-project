import React from 'react'
import Meme from './components/Meme'
import './style.css'

export default function App(){
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