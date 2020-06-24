import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.laura.svg';
import { ReactComponent as IconSair } from '../../assets/icon.sair.svg';

import './header-styles.css';

const Header = ({ onLogout }) => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          <Logo />
        </div>
        <button className="logout-button" onClick={onLogout}>
          <IconSair className="button-icon" />
          <span className="button-text">Sair</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
