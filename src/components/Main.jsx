import React from "react";
import '../styles/Main.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Main(){
    // const [memeImage, setMemeImg] = React.useState('http://i.imgflip.com/1bij.jpg'); 
    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"", 
        randomImage:"http://i.imgflip.com/1bij.jpg",
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[1])
    
    function getRandomImg(){
        const randomNumber = Math.floor(Math.random()* allMemes.length)
        const url = allMemes[randomNumber].url;
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