import React, {Component} from 'react';

 class Filter extends Component {
   render() {
     return (
       <div className="filter">
          <div className="filter__inner">
            <div className="filter__container filter__container_input">
              <i className="filter__icon filter__icon_position_left"><ion-icon name="search-outline"></ion-icon></i>
              <input className="filter__input"  type="search" placeholder="Search for a country..." />
            </div>

            <div className="filter__container filter__container_select">
              <select className="filter__select">
                <option className="filter__option" selected disabled>Filter by Region</option>
                <option className="filter__option">Africa</option>
                <option className="filter__option">America</option>
                <option className="filter__option">Asia</option>
                <option className="filter__option">Europe</option>
                <option className="filter__option">Oceania</option>
              </select>
            </div>
          </div>
       </div>
     )
   }
 }

 export default Filter
