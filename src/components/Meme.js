import React from 'react'

/**
 * 
 * @param {*} props Props inclue image, topText, and bottomText of the meme
 * @returns a DOM element which uses the props to make a meme-style image
 */
export default function Meme(props){
    const [isEditMode, setIsEditMode] = React.useState(false);

    const [memeData, setMemeData] = React.useState({
        topText: props.topText,
        bottomText: props.bottomText
    })

    function toggleEditMode(){
        setIsEditMode(prevEditMode=>!prevEditMode)
    }

    function handleChange(evt){
        const {name, value} = evt.target
        setMemeData(prevMemeData=>{
            return ({
                ...prevMemeData,
                [name]:value
            })
        })
    }

    function handleSubmit(evt){
        evt.preventDefault();
        props.updateMeme(props.id, memeData)    
        toggleEditMode();
    }


    return(
        <div className='meme-container'>
        <div className='meme'>
            <img src={props.image} className='meme--image' alt="meme"></img>
            <h1 className='meme--text top'>{memeData.topText}</h1>
            <h1 className='meme--text bottom'>{memeData.bottomText}</h1>
        </div>
        {isEditMode ? 
            <form onSubmit={handleSubmit}>
                <input 
                    name="topText"
                    placeholder={props.topText}
                    value={memeData.topText}
                    onChange={handleChange}
                />
                <input 
                    name="bottomText"
                    placeholder={props.bottomText}
                    value={memeData.bottomText}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            : props.isSaved ?
            <div className='meme--buttons'>
                <button className='meme--button' onClick={toggleEditMode}>Edit Meme</button>
                <button className='meme--button' onClick={props.deleteMeme}>Delete Meme</button>
            </div>
            :
            null
        }
        </div>
    )
}