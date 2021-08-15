import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CardDetails = ({ match }) => {
    let currencyList, languageList;
    const [country, setCountry] = useState({});
    useEffect(() => {
        fetchCountry();
    }, []);

    const fetchCountry = () => {
        axios.get(`https://restcountries.eu/rest/v2/name/${match.params.name}`)
            .then(res => {
                let country = res.data[0];
                console.log('country axios -> ', country);
                setCountry(country);
            })
            .catch(error => console.log(error));
    }
    
    if(typeof(country.currencies) != 'undefined') {
        let lenght = country.currencies.length;
        currencyList = country.currencies.map((item, index) => {
            return index == (lenght - 1) ? <span key={index}>{item.code}</span> : <span key={index}>{item.code}, </span>;
        });
    }

    if(typeof(country.languages) != 'undefined') {
        let lenght = country.languages.length;
        languageList = country.languages.map((item, index) => {
            return index == (lenght - 1) ? <span key={index}>{item.name}</span> : <span key={index}>{item.name}, </span>;
        })
    }

    return (
        <div>
            <main className="main main_mode_light">
                <div className="main__inner country-details">
                    <div className="country-details__button-container">
                        <Link to={'/'}>
                            <button className="country-details__button theme-button theme-button_mode_light">
                                <i className="theme-button__icon" >
                                    <ion-icon name="arrow-back-outline"></ion-icon>
                                </i>
                                <span className="theme-button__text">Back</span>
                            </button>
                        </Link>
                    </div>
                    <div className="country-details__info-container">
                        <div className="country-details__section country-details__section_image">
                            <img className="country-details__image" src={country.flag} />
                        </div>
                        <div className="country-details__section country-details__section_info">
                            <h1 className="country-details__title">{country.name}</h1>
                            <div className="country-details__details-info">
                                <div className="country-details__info country-details__info_primary">
                                    <p className="country-details__text"><strong>Native Name:</strong> {country.nativeName}</p>
                                    <p className="country-details__text"><strong>Polulation:</strong> {country.population}</p>
                                    <p className="country-details__text"><strong>Region:</strong> {country.region}</p>
                                    <p className="country-details__text"><strong>Sub Region:</strong> {country.subregion}</p>
                                    <p className="country-details__text"><strong>Capital:</strong> {country.capital}</p>
                                </div>
                                <div className="country-details__info country-details__info_secondary">
                                    <p className="country-details__text"><strong>Top Level Domain:</strong> {country.topLevelDomain}</p>
                                    <p className="country-details__text"><strong>Currency:</strong> { currencyList }</p>
                                    <p className="country-details__text"><strong>Languages:</strong> {languageList}</p>
                                </div>
                            </div>
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
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CardDetails;