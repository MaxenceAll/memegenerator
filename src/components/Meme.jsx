import './Meme.css'
import memesData from "../memeData.js"

function Meme() {

    function handleClick(){
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // console.log(randomNumber);
        const url = memesArray[randomNumber].url;
        console.log(url);


    }
    return ( 

        <main>

            <div className='form'>
                <input 
                    type="text"
                    className='form--inputs'
                    placeholder='Top text'
                />
                <input 
                    type="text"
                    className='form--inputs'
                    placeholder='Bottom text'
                />
                <button 
                    className='form--button'
                    onClick={handleClick}
                >
                    Get a new MEME image 🌄
                </button>
            </div>

        </main>


     );
}

export default Meme;