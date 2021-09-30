import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CardDetails extends Component  {

    constructor(props){
        super(props);
        this.state = {
            name: props.match.params.name,
            country: null,
            borders: [],
            bordersName: [],
            theme: props.theme
        }

        this.loadData = this.loadData.bind(this);
    }

    shouldComponentUpdate(){
        return true
    }

    componentDidMount(){
        this.loadData();        
    }

    loadData(){
        axios.get(`https://restcountries.com/v3.1/name/${this.state.name}`)
            .then(res => {
                console.log(res);
                let country = res.data[0];
                this.setState({country});
                this.setState({borders: country.borders});

                console.log(`country ${country}`);
                console.log(`borders ${country.borders}`);

                this.state.borders.map((item) => {
                    axios.get(`https://restcountries.com/v3.1/alpha/${item}`)
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

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
            this.setState({
                borders: [],
                country: null,
                bordersName: []
            });

            axios.get(`https://restcountries.com/v3.1/name/${this.props.match.params.name}`)
            .then(res => {
                console.log(res);
                let country = res.data[0];
                
                this.setState({country});
                this.setState({borders: country.borders});

                this.state.borders.map((item) => {
                    axios.get(`https://restcountries.com/v3.1/alpha/${item}`)
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

    


    render(){

        if (!this.state.country) {
            return <div />
        }

        // if (!this.state.bordersName) {
        //     return <div />
        // }

        console.log('from Details >>> ', this.state.theme);
        console.log('from Details >>> ', this.state.country);
        console.log('from Details >>> ', this.state.bordersName);
        
        let currencyList, languageList, borders;
    
        if(typeof(this.state.country.currencies) != 'undefined') {
            let keys = Object.keys(this.state.country.currencies);
            console.log(keys);
            currencyList = keys.map((item, index) => {
                return keys.length == 1 ? <span key={index}>{item}</span> : index == (keys.length - 1) ? <span key={index}>{item}</span> : <span key={index}>{item}, </span>;
            });
        }

        // if(typeof(this.state.country.languages) != 'undefined') {
        //     let lenght = this.state.country.languages.length;
        //     languageList = this.state.country.languages.map((item, index) => {
        //         return index == (lenght - 1) ? <span key={index}>{item.name}</span> : <span key={index}>{item.name}, </span>;
        //     })
        // }

        // const borderList = this.state.bordersName.map((item, index) => {
        //     return (
        //         <Link key={index + 1} to={`/country/${item}`}>
        //             <button className={`country-details__button country-details__button_border theme-button theme-button_mode_${this.props.theme} theme-button__${this.props.theme}-mode-shadow`}>
        //                 <span className="theme-button__text">{item}</span>
        //             </button>
        //         </Link>
        //     )
        // });

        // if (this.state.bordersName.length > 0) {
        //     borders =   <div className="country-details__border-container">
        //                     <p className={`country-details__border-text country-details__text__${this.state.theme}`}><strong>Border Countries:</strong></p>
        //                     <div className="country-details__border-details">
        //                         { borderList }
        //                     </div>
        //                 </div>
        // }

        return (
            <div>
                <main className={`main main_mode_${this.state.theme}`}>
                    <div className="main__inner country-details">
                        <div className="country-details__button-container">
                            <Link to={'/'}>
                                <button className={`country-details__button theme-button theme-button_mode_${this.state.theme} theme-button__${this.state.theme}-mode-shadow`}>
                                    <i className="theme-button__icon" >
                                        <ion-icon name="arrow-back-outline"></ion-icon>
                                    </i>
                                    <span className="theme-button__text">Back</span>
                                </button>
                            </Link>
                        </div>
                        <div className="country-details__info-container">
                            <div className="country-details__section country-details__section_image">
                                <img className={`country-details__image country-details__${this.state.theme}-mode-shadow`} src={this.state.country.flags.svg} />
                            </div>
                            <div className="country-details__section country-details__section_info">
                                <h1 className={`country-details__title country-details__text__${this.state.theme}`}>{this.state.country.name.common}</h1>
                                <div className="country-details__details-info">
                                    <div className="country-details__info country-details__info_primary">
                                        <p className={`country-details__text country-details__text__${this.state.theme}`}><strong>Official Name:</strong> {this.state.country.name.official}</p>
                                        <p className={`country-details__text country-details__text__${this.state.theme}`}><strong>Polulation:</strong> {this.state.country.population}</p>
                                        <p className={`country-details__text country-details__text__${this.state.theme}`}><strong>Region:</strong> {this.state.country.region}</p>
                                        <p className={`country-details__text country-details__text__${this.state.theme}`}><strong>Sub Region:</strong> {this.state.country.subregion}</p>
                                        <p className={`country-details__text country-details__text__${this.state.theme}`}><strong>Capital:</strong> {this.state.country.capital}</p>
                                    </div>
                                    <div className="country-details__info country-details__info_secondary">
                                        <p className={`country-details__text country-details__text__${this.state.theme}`}><strong>Top Level Domain:</strong> {this.state.country.tld}</p>
                                        <p className={`country-details__text country-details__text__${this.state.theme}`}><strong>Currency:</strong> { currencyList }</p>
                                        {/* <p className={`country-details__text country-details__text__${this.state.theme}`}><strong>Languages:</strong> {languageList}</p> */}
                                    </div>
                                </div>
                                {/* { borders } */}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default CardDetails;