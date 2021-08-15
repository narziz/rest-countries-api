import React, {Component} from 'react';
import Card from '../components/card';

 class Cards extends Component {

   render() {
     const cardList = this.props.data.map(item => <Card key={item.alpha3Code} countryData={item}/>)
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
