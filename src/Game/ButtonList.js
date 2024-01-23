import React from 'react';
import './Game.css';

const ButtonList = ({ buttonData, language, handleButtonClick, bgColor }) => {
  return (
    <div>
      {buttonData.map((button, index) => (
        <button key={index} onClick={() => handleButtonClick(button, language, index)} className="custom-button" style={{ backgroundColor: bgColor[index] }} >
          {button[language]}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;