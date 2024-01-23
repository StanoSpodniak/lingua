import ButtonList from './ButtonList';
import './Game.css';
import React, { useState, useEffect } from 'react';
import Spanish from '../Data/Spanish.json';

//Skúsiť to urobiť na spôsob language benchmark. Bude desať levelov. Každý level bude mať 50 slov rozdelených podľa obtiažnosti. Na konci sa bude počítať čas a chyby - z toho sa vypočíta konečné skóre.

const Game = () => {
  const [wordData, setWordData] = useState([]);
  const [randomEnglish, setRandomEnglish] = useState([]);
  const [randomSpanish, setRandomSpanish] = useState([]);

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const [buttonColors, setButtonColors] = useState(["white", "white", "white", "white", "white", "white", "white"]);

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

  //skusit dat tieto dve funkcie do ineho suboru
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

  const handleButtonClick = (button, language, index) => {
    //cez funkciu bude tiez treba menit css button
    setSelectedLanguage(language);
    setSelectedButton(button.id);

    if (selectedButton !== null) {
      if (selectedButton === button.id && selectedLanguage !== language) {
        //console.log("correct");
        
      } else if (selectedButton !== button.id && selectedLanguage !== language) {
        //console.log("incorrect");
      } else {
        setButtonColors(...buttonColors, buttonColors[index] = "lightblue");
        console.log(buttonColors);
      }
    }
  };

  return (
    <div className="game">
      <ButtonList buttonData={randomEnglish} language={"english"} handleButtonClick={handleButtonClick} bgColor={buttonColors} />
      <ButtonList buttonData={randomSpanish} language={"spanish"} handleButtonClick={handleButtonClick} bgColor={buttonColors} />
    </div>
  );
};

export default Game;