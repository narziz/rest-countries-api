import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {

    if (event.target.classList.contains('theme-button_mode_light')) {
      this.props.changeTheme('dark');
    } else {
      this.props.changeTheme('light');
    }
    
    event.preventDefault();
  }

  render(){
    return (
      <header className={`header header_mode_${this.props.theme}`}>
          <div className="header__inner">
            <h2 className={`header__title header__title__mode-${this.props.theme}`}>Where in the world?</h2>
            { this.props.theme == 'light' ? 
              <button onClick={this.handleClick} className="header__button header__button_visible theme-button theme-button_mode_light">
                <i className="theme-button__icon" >
                  <ion-icon name="sunny-outline"></ion-icon>
                </i>
                <span className="theme-button__text">Light Mode</span>
              </button>
            :
              <button onClick={this.handleClick} className="header__button header__button_visible theme-button theme-button_mode_dark">
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
