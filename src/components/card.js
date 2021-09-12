import React, {Component} from 'react';
import { Link } from 'react-router-dom';

 class Card extends Component {
   render() {
     let country = this.props.countryData;

     return (

       <div className="cards__item card">
         <div className="card__inner card__inner_mode_light card__inner_mode_light__shadow">
            <Link key={country.alpha3Code} to={`/country/${country.name}`}>
               <div className="card__image-container">
                  <img className="card__image" src={country.flag} alt={country.name}/>
               </div>

               <div className="card__description">
                <h3 className="card__title">{country.name}</h3>
                 <p className="card__details"><strong>Population:</strong> {country.population}</p>
                 <p className="card__details"><strong>Region:</strong> {country.region}</p>
                 <p className="card__details"><strong>Capital:</strong> {country.capital}</p>
               </div>
            </Link>
         </div>
       </div>
     )
   }
 }

 export default Card
