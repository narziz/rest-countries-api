import React, {Component} from 'react';
import Header from "./components/header";
import Routes from './config/routes';

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
    console.log('i am updating >>> ', this.state.theme);
    return (
        <div className="container-fluid">
            <Header theme={this.state.theme} changeTheme={this.handleThemeChange} />
            <Routes theme={this.state.theme} />
        </div>
    )
  }
}

export default App
