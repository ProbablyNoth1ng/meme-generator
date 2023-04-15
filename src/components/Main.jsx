import React from "react";
import '../styles/Main.scss';
import memes from '../assets/memesData'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Main(){
    // const [memeImage, setMemeImg] = React.useState('http://i.imgflip.com/1bij.jpg'); 
    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"", 
        randomImage:"http://i.imgflip.com/1bij.jpg",
    })
    


    function getRandomImg(){
        const memesArray = memes.data.memes;
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
        
    }
    function handleChange(event){
        const {type, name, value} = event.target
        setMeme(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }
    return (
        <main className="main">
            <div className="main--container container">
                <div className="inputs">
                    <input 
                        type="text" 
                        placeholder="enter top text" 
                        className="input--form"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="enter bottom text" 
                        className="input--form"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button className="generate-meme-button" onClick={getRandomImg}> Get a new meme image  🖼 </button>    
                <div className="meme">
                    <img src={meme.randomImage} alt="" className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>

            </div>        
            
        </main>
    )
}