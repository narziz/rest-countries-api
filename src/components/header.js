import React, { Component } from 'react';
import ThemeContext from '../context/ThemeContext';

class Header extends Component{
  static contextType = ThemeContext;

  render(){
    const {theme, updateTheme } = this.context;

    return (
      <header className={`header header_mode_${theme}`}>
        <div className="header__inner">
          <h2 className={`header__title header__title__mode-${theme}`}>Where in the world?</h2>
          { theme == 'light' ? 
            <button onClick={updateTheme} className="header__button header__button_visible theme-button theme-button_mode_light">
              <i className="theme-button__icon" >
                <ion-icon name="sunny-outline"></ion-icon>
              </i>
              <span className="theme-button__text">Light Mode</span>
            </button>
          :
            <button onClick={updateTheme} className="header__button header__button_visible theme-button theme-button_mode_dark">
              <i className="theme-button__icon" >
                <ion-icon name="moon"></ion-icon>
              </i>
              <span className="theme-button__text">Dark Mode</span>
            </button>
          }
        </div>
      </header>
    )
  }
}

export default Header
