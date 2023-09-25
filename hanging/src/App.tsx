import { letters } from './helpers/letters';
import './App.css';
import { HangImage } from './componets/Hanglmage';
import { useEffect, useState } from 'react';
import { getRandomWord } from './helpers/getRandomWord';

function App() {

  const [word, setWork ] = useState(getRandomWord());
  const [hiddenWord, setHiddenWork] = useState('_ '.repeat(word.length));
  const [ attempts, setAttempts ] = useState(0);
  const [ lose, setLose ] = useState(false);
  const [ won, setWon ] = useState(false);

  useEffect( () => {
    if (attempts >= 9) {
      setLose( true );
    }
  }, [ attempts ]);  //Hooks

  
  //Determinar si la persona ganó
  useEffect(() => {
    // console.log(hiddenWord);
    const currentHiddenWord = hiddenWord.split(' ').join('')
    if( currentHiddenWord === word) {
    setWon( true);
    }
  }, [ hiddenWord ])



  const checkLetter = (letter: string) => {
    if( lose ) return;
    if( won ) return;
    
    if( !word.includes(letter)) {

      setAttempts(Math.min(attempts + 1, 9)  );
      return;
      
    }
    const hiddenWorkArray = hiddenWord.split(' '); 

    for(let i = 0; i < word.length; i++) {
      if ( word[i] === letter) {
        hiddenWorkArray[i] = letter
      }
    }

    setHiddenWork(hiddenWorkArray.join(' '));
    
    
  }

  
  const newGame = () => {
    const newWord = getRandomWord();
    
    setWork( newWord )
    setHiddenWork('_ '.repeat(newWord.length));


    setAttempts(0);
    setLose(false);
    setWon(false);
  }


  
  return (
    <>

    {/* imagenes */}
    <HangImage  imageNumber={ attempts }/>

    {/* palabra oculta */}
    <h3>{hiddenWord}</h3>

    {/* contador de intentos */}
    <h3>Intentos: { attempts } </h3>

    {/*  Mensaje si perdió */}
    {
      (lose) ? <h2>Perdió { word }</h2>
      : ''
    }

    {/*  Mensaje si Ganó */}
    {
      (won) ? <h2>Felicidades, usted ganó </h2>
      : ''
    }


    {/* Botones de letra */}
      {
        letters.map( (letter) => (
          <button 
          onClick={ () => checkLetter(letter) }
            key={letter}>
              { letter }
          </button>
         ) )
      }



      <br /> <br />

      <button onClick={ newGame } >¿Nuevo Juego?</button>

    </>
  )
};

export default App
