import React from 'react';

import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddNewFood from './components/AddNewFood';
// import Search from './components/Search'
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
  addToMenuHandler = (newItem) => {
    // let newItem = {name:name, calories: calories, quantity: quantity}
    let updatedMenu = [...this.state.menu]
    let alreadyExisted = updatedMenu.find(el=>el.name===newItem.name)
    // 
    if (alreadyExisted){
      // updatedMenu[index].quantity += newItem.quantity
      updatedMenu.map(el=>{
        if (el.name===newItem.name){
          el.quantity+=newItem.quantity
          el.calories+=newItem.calories
        }
        return el;
      })
    } else {
      updatedMenu.push(newItem)
    }
    
    let totalCalories = (this.state.total + newItem.calories)
    this.setState({
      menu: updatedMenu,
      total: totalCalories
    })
  }
  removeItem = (item) => {
    let menuCopy = [...this.state.menu]
    let index = menuCopy.indexOf(item);
    let totalCalories = this.state.total
    console.log(totalCalories, item)
    let updatedTotal = totalCalories - item.calories
    menuCopy.splice(index,1)
    this.setState({
      menu: menuCopy,
      total: updatedTotal
    })
  }
  render(){
    return (
      <div className="App">
      <h1>IronNutrition</h1>
      <input type='search' className='input search-bar' onChange={this.queryHandler}/>
        <div className='page'>
          {this.state.list.filter(el=>el.name.toLowerCase().includes(this.state.query)).map((el,i)=>{
            return <FoodBox key = {i} {...el} addToMenu={(el)=>this.addToMenuHandler(el)}/>
          })}
          
          <AddNewFood addTheFood={this.addFoodHandler}/>
          <div className='menu'>
            <h2>Today's Food</h2>
            <ul>
            {this.state.menu.map((el,i)=>{
              return <li key={i}>{el.quantity} {el.name} = {el.calories} cal 
              <span onClick={(e)=>this.removeItem(el)}>🗑</span></li>
            })}
            </ul> 
            Total:{this.state.total} cal
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
