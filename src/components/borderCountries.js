import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { render } from 'node-sass';

class BorderCountries extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         borders: props.borders
    //     }
        
    //     console.log('this.state.borders -->>> ' , this.state.borders);
    //     // this.handleInputChange = this.handleInputChange.bind(this);
    //  }

    // fetchBorderCountries = () => {
    //     setBorderCountries(props.borders);
    //     console.log('country.borders --> ', borderCountries);

    //     if (typeof(props.borders) !== 'undefined'){
    //         console.log('country.borders --> ', props.borders);
    //     }
    //         country.borders.map((item, index) => {
    //             console.log('item -> ', item);
    //             axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${item}`)
    //                 .then(res => {
    //                     let data = res.data[0];
    //                     console.log('border -> ', data);
    //                     // setBorderCountries(data.name);
    //                 })
    //                 .catch(error => console.log(error));
    //         });
    // }

    render(){
        return (
            <div className="country-details__border-container">
                <p className="country-details__border-text"><strong>Border Countries:</strong></p>
                <button className="country-details__button country-details__button_border theme-button theme-button_mode_light">
                    <span className="theme-button__text">France</span>
                </button>
                <button className="country-details__button country-details__button_border theme-button theme-button_mode_light">
                    <span className="theme-button__text">France</span>
                </button>
                <button className="country-details__button country-details__button_border theme-button theme-button_mode_light">
                    <span className="theme-button__text">France</span>
                </button>
            </div>
        )
    }
}

export default BorderCountries;