import React, {Component} from 'react';

 class Card extends Component {
   constructor(props){
      super(props);
      this.state = {
          data: this.props.countryData
      }

      console.log('from child --> ', this.state.data);
  }
   render() {
     return (
       
       <div className="cards__item card">
         <div className="card__inner card__inner_mode_light">
            <div className="card__image-container">
              <a href="#">
                <img className="card__image" src="https://restcountries.eu/data/usa.svg" />
              </a>
            </div>

            <div className="card__description">
              <a href="#">
                <h3 className="card__title">{}</h3>
              </a>
              <p className="card__details"><strong>Population:</strong> 81.770.845</p>
              <p className="card__details"><strong>Region:</strong> America</p>
              <p className="card__details"><strong>Capital:</strong> New York</p>
            </div>
         </div>
       </div>
     )
   }
 }

 export default Card
