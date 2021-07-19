import React, {Component} from 'react';
import Filter from "./filter"
import Cards from "./cards"

 class Main extends Component {
   render() {
     return (
       <main className="main main_mode_light">
          <div className="main__inner">
            <Filter />
            <Cards />
          </div>
       </main>
     )
   }
 }

 export default Main
