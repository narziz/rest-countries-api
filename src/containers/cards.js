import React, {Component} from 'react';
import Card from '../components/card';

 class Cards extends Component {
   constructor(props){
    super(props);
    this.state = {
      theme: props.theme
    }
   }

   render() {
     const cardList = this.props.data.map(item => <Card theme={this.state.theme} key={item.alpha3Code} countryData={item}/>)
     return (
       <div className="cards">
          <div className="cards_inner">
            { cardList }
          </div>
       </div>
     )
   }
 }

 export default Cards
