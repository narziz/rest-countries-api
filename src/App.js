import React, {Component} from 'react';
import Header from "./components/header";
import Routes from './config/routes';

class App extends Component {
  render(){
    return (
        <div className="container-fluid">
          <Header />
          <Routes />
        </div>
    )
  }
}

export default App
