import React, {Component} from 'react';

class Filter extends Component {

  constructor(props){
     super(props);
     this.state = {
         regions: ["Africa", "America", "Asia", "Europe", "Oceania"],
         inputVal: '',
         selectVal: '',
         theme: props.theme
     }

     this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      selectVal: '',
      inputVal: event.target.value
    });
    this.props.sendInputValue(event.target.value)
  }

  handleSelectChange = (event) => {
    this.setState({
      selectVal: event.target.value,
      inputVal: ''
    });
    this.props.sendSelectValue(event.target.value)
  }

  render() {
    const optionList = this.state.regions.map((region, index) => <option key={index} value={region} className="filter__option">{region}</option>)
    return (
      <div className="filter">
         <div className="filter__inner">
           <div className="filter__container filter__container_input">

             <i className={`filter__icon filter__icon__${this.state.theme} filter__icon_position_left`}><ion-icon name="search-outline"></ion-icon></i>
             <form className="filter__form">
              <input className={`filter__input filter__input__${this.state.theme} filter__input__shadow-${this.state.theme}`}
                     value={this.state.inputVal}
                     onChange={this.handleInputChange}
                     type="search"
                     name="search"
                     placeholder="Search for a country..." />
             </form>
           </div>

           <div className="filter__container filter__container_select">
             <select className={`filter__select filter__select__${this.state.theme} filter__select__shadow-${this.state.theme}`} value={this.state.selectVal} onChange={this.handleSelectChange}>
              <option defaultValue="Select the region" className="filter__option">Select the region</option>
              { optionList }
             </select>
           </div>
         </div>
      </div>
    )
  }

}

 export default Filter
