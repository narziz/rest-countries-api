import React, {Component} from 'react';
import Filter from "../components/fltr";
import Cards from "./cards";
import axios from 'axios';

 class Main extends Component {

   constructor(props){
      super(props);
      this.state = {
          data: [],
          inputVal: '',
          theme: props.theme
      }
      
      this.handleInput = this.handleInput.bind(this);
      this.handleSelect = this.handleSelect.bind(this);

  }
  
   componentDidMount(){
     axios.get('https://restcountries.com/v3.1/all')
     .then(res => {
       console.log(res);
       let data = res.data;
       this.setState({ data })
     })
     .catch(error => console.log(error));
   }

   handleInput = (value) => {
     let url;

     if (value != '') {
       url = `https://restcountries.com/v3.1/name/${value}`
     } else {
       url = 'https://restcountries.com/v3.1/all'
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
      url = 'https://restcountries.com/v3.1/all'
    } else {
      url = `https://restcountries.com/v3.1/region/${region}`
    }

    axios.get(url)
     .then(res => {
       let data = res.data;
       this.setState({ data })
     })
     .catch(error => console.log(error));

   }

   render() {
     console.log('from MAINs props >>> ', this.state.theme);
     return (
       <main className={`main main_mode_${this.state.theme}`}>
          <div className="main__inner">
            <Filter theme={this.state.theme} sendInputValue={this.handleInput} sendSelectValue={this.handleSelect} />
            <Cards theme={this.state.theme} data={this.state.data} />
          </div>
       </main>
     )
   }
 }

 export default Main
