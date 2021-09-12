import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CardDetails extends Component  {

    constructor(props){
        super(props);
        this.state = {
            name: props.match.params.name,
            country: {},
            borders: [],
            bordersName: []
        }
    }

    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
            this.setState({
                borders: [],
                country: {},
                bordersName: []
            });

            axios.get(`https://restcountries.eu/rest/v2/name/${this.props.match.params.name}`)
            .then(res => {
                let country = res.data[0];
                
                this.setState({country});
                this.setState({borders: country.borders});

                this.state.borders.map((item) => {
                    axios.get(`https://restcountries.eu/rest/v2/alpha/${item}`)
                        .then(res => {
                            let country = res.data;
                            this.setState({
                                bordersName: [...this.state.bordersName, country.name]
                            })
                        })
                        .catch(error => console.log(error));
                });
                
            })
            .catch(error => console.log(error));
        }
    }

    fetchData(){
        
    }

    componentDidMount(){
        
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.name}`)
            .then(res => {
                let country = res.data[0];
                this.setState({country});
                this.setState({borders: country.borders});

                this.state.borders.map((item) => {
                    axios.get(`https://restcountries.eu/rest/v2/alpha/${item}`)
                        .then(res => {
                            let country = res.data;
                            this.setState({
                                bordersName: [...this.state.bordersName, country.name]
                            })
                        })
                        .catch(error => console.log(error));
                });
                
            })
            .catch(error => console.log(error));
    }


    render(){
        let currencyList, languageList, borders;
    
        if(typeof(this.state.country.currencies) != 'undefined') {
            let lenght = this.state.country.currencies.length;
            currencyList = this.state.country.currencies.map((item, index) => {
                return index == (lenght - 1) ? <span key={index}>{item.code}</span> : <span key={index}>{item.code}, </span>;
            });
        }

        if(typeof(this.state.country.languages) != 'undefined') {
            let lenght = this.state.country.languages.length;
            languageList = this.state.country.languages.map((item, index) => {
                return index == (lenght - 1) ? <span key={index}>{item.name}</span> : <span key={index}>{item.name}, </span>;
            })
        }

        const borderList = this.state.bordersName.map((item, index) => {
            return (
                <Link key={index + 1} to={`/country/${item}`}>
                    <button className="country-details__button country-details__button_border theme-button theme-button_mode_light theme-button__light-mode-shadow">
                        <span className="theme-button__text">{item}</span>
                    </button>
                </Link>
            )
        });

        if (this.state.bordersName.length > 0) {
            borders =   <div className="country-details__border-container">
                            <p className="country-details__border-text"><strong>Border Countries:</strong></p>
                            <div className="country-details__border-details">
                                { borderList }
                            </div>
                        </div>
        }

        return (
            <div>
                <main className="main main_mode_light">
                    <div className="main__inner country-details">
                        <div className="country-details__button-container">
                            <Link to={'/'}>
                                <button className="country-details__button theme-button theme-button_mode_light theme-button__light-mode-shadow">
                                    <i className="theme-button__icon" >
                                        <ion-icon name="arrow-back-outline"></ion-icon>
                                    </i>
                                    <span className="theme-button__text">Back</span>
                                </button>
                            </Link>
                        </div>
                        <div className="country-details__info-container">
                            <div className="country-details__section country-details__section_image">
                                <img className="country-details__image country-details__light-mode-shadow" src={this.state.country.flag} />
                            </div>
                            <div className="country-details__section country-details__section_info">
                                <h1 className="country-details__title">{this.state.country.name}</h1>
                                <div className="country-details__details-info">
                                    <div className="country-details__info country-details__info_primary">
                                        <p className="country-details__text"><strong>Native Name:</strong> {this.state.country.nativeName}</p>
                                        <p className="country-details__text"><strong>Polulation:</strong> {this.state.country.population}</p>
                                        <p className="country-details__text"><strong>Region:</strong> {this.state.country.region}</p>
                                        <p className="country-details__text"><strong>Sub Region:</strong> {this.state.country.subregion}</p>
                                        <p className="country-details__text"><strong>Capital:</strong> {this.state.country.capital}</p>
                                    </div>
                                    <div className="country-details__info country-details__info_secondary">
                                        <p className="country-details__text"><strong>Top Level Domain:</strong> {this.state.country.topLevelDomain}</p>
                                        <p className="country-details__text"><strong>Currency:</strong> { currencyList }</p>
                                        <p className="country-details__text"><strong>Languages:</strong> {languageList}</p>
                                    </div>
                                </div>
                                { borders }
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default CardDetails;