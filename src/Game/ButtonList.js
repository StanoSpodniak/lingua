import React from 'react';
import './Game.css';

const ButtonList = ({ buttonData, language, handleButtonClick }) => {
  return (
    <div>
      {buttonData.map((button, index) => (
        <button key={index} onClick={() => handleButtonClick(button)} className="custom-button">
          {button[language]}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;