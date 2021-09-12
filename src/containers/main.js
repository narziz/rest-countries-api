import React, {Component} from 'react';
import Filter from "../components/fltr";
import Cards from "./cards";
import axios from 'axios';
import ThemeContext from '../context/themeContext';

 class Main extends Component {
   static contextType = ThemeContext;

   constructor(props){
      super(props);
      this.state = {
          data: [],
          inputVal: '',
          // theme: props.theme
      }
      
      this.handleInput = this.handleInput.bind(this);
      this.handleSelect = this.handleSelect.bind(this);

  }
  
   componentDidMount(){
     axios.get('https://restcountries.eu/rest/v2/all')
     .then(res => {
       let data = res.data;
       this.setState({ data })
     })
     .catch(error => console.log(error));
   }

   handleInput = (value) => {
     let url;

     if (value != '') {
       url = `https://restcountries.eu/rest/v2/name/${value}`
     } else {
       url = 'https://restcountries.eu/rest/v2/all'
     }

     axios.get(url)
     .then(res => {
       let data = res.data;
       this.setState({ data })
     })
     .catch(error => console.log(error));

   }

   handleSelect = (region) => {
     let url;

    if (region == 'Select the region') {
      url = 'https://restcountries.eu/rest/v2/all'
    } else {
      url = `https://restcountries.eu/rest/v2/region/${region}`
    }

    axios.get(url)
     .then(res => {
       let data = res.data;
       this.setState({ data })
     })
     .catch(error => console.log(error));

   }

   shouldComponentUpdate(){
     return true
   }

   componentDidUpdate(){
     console.log('oofff >>> ', this.context);
   }

   render() {
     const { theme, updateTheme } = this.context
     console.log('hohoho ', theme);
     console.log('hohoho ', updateTheme);
     return (
       <main className={`main main_mode_${theme}`}>
          <div className="main__inner">
            <Filter theme={theme} sendInputValue={this.handleInput} sendSelectValue={this.handleSelect} />
            <Cards theme={theme} data={this.state.data} />
          </div>
       </main>
     )
   }
 }

 export default Main
