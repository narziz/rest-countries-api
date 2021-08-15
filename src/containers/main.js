import React, {Component} from 'react';
import Filter from "../components/fltr";
import Cards from "./cards";
import axios from 'axios';

 class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
          data: [],
          inputVal: ''
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

   render() {
     return (
       <main className="main main_mode_light">
          <div className="main__inner">
            <Filter sendInputValue={this.handleInput} sendSelectValue={this.handleSelect} />
            <Cards data={this.state.data} />
          </div>
       </main>
     )
   }
 }

 export default Main
