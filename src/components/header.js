import React, { Component } from 'react';

class Header extends Component{

  // constructor(){
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick = () => {
    console.log('clicked');
  }

  render(){
    return (
      <div className="header header_mode_light">
        <div className="header__inner">
          <h2 className="header__title">Where in the world?</h2>
          <button onClick={this.handleClick} className="header__button header__button_visible theme-button theme-button_mode_light">
            <i className="theme-button__icon" >
              <ion-icon name="sunny-outline"></ion-icon>
            </i>
            <span className="theme-button__text">Light Mode</span>
          </button>
          <button className="header__button theme-button theme-button_mode_dark">
            <i className="theme-button__icon" >
              <ion-icon name="moon"></ion-icon>
            </i>
            <span className="theme-button__text">Dark Mode</span>
          </button>
        </div>
      </div>
    )
  }
}

export default Header
