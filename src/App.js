import React, {Component} from 'react';
import Header from "./components/header";
import Routes from './config/routes';
import { ThemeProvider } from './config/themeContext'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      theme: 'light'
    }

    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleThemeChange(data){
    console.log('theme is changing...', data);
    this.setState({
      theme: data
    });
  }

  render(){
    return (
        <div className="container-fluid">
          <Header theme={this.state.theme} changeTheme={this.handleThemeChange} />
          <ThemeProvider value={this.state.theme}>
            <Routes />
          </ThemeProvider>
        </div>
    )
  }
}

export default App
