import React from 'react'
class addNewFood extends React.Component{
    state = {
        name:'',
        calories:'',
        image:'',
        active: false
    }
   
    handleNameSubmit = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleCaloriesSubmit = (event) => {
        this.setState({
            calories: event.target.value
        })
    }
    handleImageSubmit = (event) => {
        this.setState({
            image: event.target.value
        })
    } 
    //prevent default of a form
    handleSubmit = (event) => {
        event.preventDefault();
          //call the parent passed function
        this.props.addTheFood(this.state)
        this.setState({
            name:'',
            calories:'',
            image:'',
            active:false         
        })
    }
    displayForm = () => {
        if(this.state.active===false){
            this.setState({
                active: true
            })
        } else {
            this.setState({
                active: false
            })
        }
    }
    render(){
        return(
            <div>
            <button onClick={this.displayForm}>Add new food</button>
                {this.state.active && <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' name='name' value={this.state.name} onChange={(e)=>this.handleNameSubmit(e)}/>
                    <label>Calories:</label>
                    <input type='text' name='calories' value={this.state.calories} onChange={(e)=>this.handleCaloriesSubmit(e)}/>
                    <label>Image:</label>
                    <input type='text' name='image' value={this.state.image} onChange={(e)=>this.handleImageSubmit(e)}/>
                    <button>Submit</button>
                </form>}
            </div>
        )
    }
}
export default addNewFood