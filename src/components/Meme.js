import React from 'react'

/**
 * 
 * @param {*} props Props inclue image, topText, and bottomText of the meme
 * @returns a DOM element which uses the props to make a meme-style image
 */
export default function Meme(props){
    return(
        <div className='meme'>
            <img src={props.image} className='meme--image'></img>
            <h1 className='meme--text top'>{props.topText}</h1>
            <h1 className='meme--text bottom'>{props.bottomText}</h1>
        </div>
    )
}