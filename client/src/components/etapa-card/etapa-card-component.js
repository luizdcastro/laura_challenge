import React from 'react';

import './etapa-card-styles.css';

const EtapaCard = ({ counter, title, icon }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <img className="card-icon" src={icon} alt="icon" />
        <h2 className="card-counter">{counter}</h2>
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

export default EtapaCard;
