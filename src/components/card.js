import React, {Component} from 'react';
import { Link } from 'react-router-dom';

 class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      theme: props.theme
    }
   }

   render() {
     let country = this.props.countryData;

     return (

       <div className="cards__item card">
         <div className={`card__inner card__inner__mode_${this.state.theme} card__inner__shadow-${this.state.theme}`}>
            <Link key={country.alpha3Code} to={`/country/${country.name}`}>
               <div className="card__image-container">
                  <img className="card__image" src={country.flag} alt={country.name}/>
               </div>

               <div className="card__description">
                <h3 className={`card__title cart__text__${this.state.theme}`}>{country.name}</h3>
                 <p className={`card__details cart__text__${this.state.theme}`}><strong>Population:</strong> {country.population}</p>
                 <p className={`card__details cart__text__${this.state.theme}`}><strong>Region:</strong> {country.region}</p>
                 <p className={`card__details cart__text__${this.state.theme}`}><strong>Capital:</strong> {country.capital}</p>
               </div>
            </Link>
         </div>
       </div>
     )
   }
 }

 export default Card
