import React from 'react';
import ButtonList from './ButtonList';
import './Game.css';

const Game = () => {
  const englishButtons = [
    { label: 'house', value: 'button1' },
    { label: 'car', value: 'button2' },
    { label: 'dog', value: 'button3' },
  ];

  const spanishButtons = [
    { label: 'la casa', value: 'button1' },
    { label: 'el carro', value: 'button2' },
    { label: 'el perro', value: 'button3' },
  ];

  const handleButtonClick = (button) => {
    console.log(`Button clicked: ${button.label}`);
    // Add more functionality here
  };

  return (
    <div className="game">
      <ButtonList buttonData={englishButtons} handleButtonClick={handleButtonClick} />
      <ButtonList buttonData={spanishButtons} handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default Game;