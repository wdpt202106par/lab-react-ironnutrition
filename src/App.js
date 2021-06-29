import React from 'react';

import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddNewFood from './components/AddNewFood';
import Search from './components/Search'
class App extends React.Component {
  state = {
    list : foods,
    menu: [],
    query:'',
    total:0
  }
  addFoodHandler = (theFood) => {
    let foodList = [...foods]
    foodList.push(theFood)
    this.setState({
      list : foodList,
      menu:[]
    })
  } 
  queryHandler = (event) =>{
    // let updatedList = [...this.setState.list].filter(el=>el.name.includes(this.state.query))
    this.setState({
      query: event.target.value,
    })
  }
  addToMenuHandler = (newDish) => {
    // let newDish = {name:name, calories: calories, quantity: quantity}
    let updatedMenu = [...this.state.menu].push(newDish)
    console.log(updatedMenu)
    // this.setState({
    //   menu: updatedMenu
    // })
  }

  render(){
    return (
      <div className="App">
      <h1>IronNutrition</h1>
      <Search query={this.state.query} handleQuery={(e)=>this.queryHandler(e)}/>
      {this.state.list.filter(el=>el.name.includes(this.state.query)).map((el,i)=>{
        return <FoodBox key = {i} {...el} addToMenu={this.addToMenuHandler}/>
      })}
      
      <AddNewFood addTheFood={this.addFoodHandler}/>
      {/* <div className='column'>
        <h2>Today's Food</h2>
        {this.state.menu.map((el,i)=>{
          return <ul><li key={i} {...el}>{el.name}={el.calories} cal</li></ul>
        })}
        Total:{this.total} cal
      </div> */}
      </div>
    );
  }
}

export default App;
