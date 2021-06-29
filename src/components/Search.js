import React from 'react';

class Search extends React.Component {
    // state = {
    //     content: ''
    // }
    // handleSearchSubmit = (event) => {
    //     this.setState({
    //         content: event.target.value
    //     })
    // } 
    // handleSubmit = (event) => {
    //     event.preventDefault;
    //     this.props.searchFood(this.state.content)
    // }
    // render(){
    //     return (
    //         <div onKeyDown={this.handleSubmit} className='searchBar'>
    //         <input type='text' name='content' onChange={(e)=>this.handleSearchSubmit(e)}/>
    //         <div/>
    //     )
    // }
    render() {
        return(
            <div>
                <input type='text' className='input search-bar' value={this.props.query} placeholder='search food' onChange={this.props.handleQuery}/>
                
            </div>
        )
    }
}
export default Search 