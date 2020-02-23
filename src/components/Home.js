//modules
import React from 'react';
import {  useTranslation } from 'react-i18next';
//files
import logo from '../logo.svg';

function Home() {
    const { t, i18n } = useTranslation();
    
    return (    
      <div className="App">
        <p className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {t('Welcome to React')}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('Learn React')}
          </a>
        </p>
      </div>
    );
  }

export default Home;
