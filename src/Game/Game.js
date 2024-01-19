import ButtonList from './ButtonList';
import './Game.css';
import React, { useState, useEffect } from 'react';
import Spanish from '../Data/Spanish.json';

const Game = () => {
  const [wordData, setWordData] = useState([]);
  const [randomEnglish, setRandomEnglish] = useState([]);
  const [randomSpanish, setRandomSpanish] = useState([]);

  const [firstChoice, setFirstChoice] = useState("none");
  const [secondChoice, setSecondChoice] = useState("none");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.resolve(Spanish);
        setWordData(response);

        } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setRandomEnglish(getRandomItems(wordData, 7))
  }, [wordData]);

  useEffect(() => {
    setRandomSpanish(shuffle(randomEnglish))
  }, [randomEnglish])

  //skusit dat tieto funkcie do ineho suboru
  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const shuffle = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleButtonClick = (button) => {
    //asi to skusit urobit cez lokal storage
    
    console.log(firstChoice);
    console.log(secondChoice);

    if (secondChoice === "none") {
      setSecondChoice(button.id)
    } else {
      setFirstChoice(button.id);
    }

    if (firstChoice === secondChoice) {
      console.log("correct: " + button.english + " = " + button.spanish);
    } else {
      console.log("First: " + firstChoice + " Second: " + secondChoice);
    }
  };

  return (
    <div className="game">
      <ButtonList buttonData={randomEnglish} language={"english"}  handleButtonClick={handleButtonClick} />
      <ButtonList buttonData={randomSpanish} language={"spanish"} handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default Game;