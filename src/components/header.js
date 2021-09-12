import React, { Component } from 'react';

class Header extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      currentTheme: props.theme
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    console.log(event.target);

    if(this.state.currentTheme == 'light'){
      this.setState({
        currentTheme: 'dark'
      })
    } else {
      this.setState({
        currentTheme: 'light'
      })
    }
    console.log(`this.state.currentTheme --->>> ${this.state.currentTheme}`);
    this.props.changeTheme(this.state.currentTheme)

  }

  render(){
    return (
      <header className={`header header_mode_${this.state.currentTheme}`}>
        <div className="header__inner">
          <h2 className={`header__title header__title__mode-${this.state.currentTheme}`}>Where in the world?</h2>
          { this.state.currentTheme == 'light' ? 
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
