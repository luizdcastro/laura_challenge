import React from 'react';

import './button-style.css';

const ButtonCustom = ({ title, onClick }) => {
  return (
    <div>
      <button className="button-regular" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default ButtonCustom;
