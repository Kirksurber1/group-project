import React from 'react'
import Meme from './Meme'


/* Eventually, props should be an array of memeData (or an array of meme objects)
    Then, memelist will use the props to make a list of meme data
    For now, it's just hard-coded
*/
export default function MemeList(props){
    return(
        <div className='memeList'>
            <h1>Saved Memes</h1>
            <Meme 
                topText='One does not simply'
                bottomText='Walk into Mordor'
                image='https://i.imgflip.com/1bij.jpg'
            />
            <Meme 
                topText='One does not simply'
                bottomText='Walk into Mordor'
                image='https://i.imgflip.com/1bij.jpg'
            />
            <Meme 
                topText='One does not simply'
                bottomText='Walk into Mordor'
                image='https://i.imgflip.com/1bij.jpg'
            />
        </div>
    )
}