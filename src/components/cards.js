import React, {Component} from 'react';
import Card from './card';
import axios from 'axios';

 class Cards extends Component {
   constructor(props){
      super(props);
      this.state = {
          data: []
      }

      console.log('from parent --> ', this.state.data);
  }

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      console.log(res.data);
      let data = res.data;
      this.setState({ data })
    })
    .catch(error => console.log(error));
  }
   render() {
     console.log('from parent --> ', this.state.data);
     return (
       <div className="cards">
          <div className="cards_inner">
            <Card countryData={this.state.data}/>
          </div>
       </div>
     )
   }
 }

 export default Cards
