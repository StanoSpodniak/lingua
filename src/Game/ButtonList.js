import React from 'react';
import './Game.css';

const ButtonList = ({ buttonData, language, handleButtonClick, backgroundColor }) => {
  return (
    <div>
      {buttonData.map((button, index) => (
        <button key={index} onClick={() => handleButtonClick(button, language, index)} className="custom-button" backgroundColor={backgroundColor[index]} >
          {button[language]}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;