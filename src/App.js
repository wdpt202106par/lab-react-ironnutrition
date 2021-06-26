import React from 'react';

import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json';
import FoodBox from './components/FoodBox'

class App extends React.Component {
  state = {
    list : foods
  }
  render(){
    return (
      <div className="App">
      {this.state.list.map((el,i)=>{
        return <FoodBox key = {i} {...el} />
      })}
        
      </div>
    );
  }
}

export default App;
