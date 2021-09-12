import React, { Component } from 'react';

const ThemeContext = React.createContext();

class ThemeProvider extends Component {
    state = {
        theme: 'light'
    }

    updateTheme = (event) => {
        console.log(event.target);

        if(event.target.classList.contains('theme-button_mode_light')){
            this.setState({
                theme: 'dark'
            })
          } else {
            this.setState({
                theme: 'light'
            })
          }
    }

    render(){
        const { theme } = this.state;
        const { updateTheme } = this

        console.log('updating..... >> ', theme);
        return (
            <ThemeContext.Provider value={{
                theme,
                updateTheme
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContext

export { ThemeProvider }