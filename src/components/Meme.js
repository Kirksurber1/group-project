import React from 'react'

export default function Meme(props){
    return(
        <div className='meme'>
            <h1 className='meme--text top'>{props.topText}</h1>
            <h1 className='meme--text bottom'>{props.bottomText}</h1>
            <img src={props.image} className='meme--image'></img>
        </div>
    )
}