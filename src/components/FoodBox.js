import React from 'react'

class FoodBox extends React.Component {
    state = { 
        quantity:1,
    }
    quantityHandler = () =>{
        this.setState({
            quantity: this.state.quantity + 1
        })
    }
    render(){
        return (
            <div className='column'>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.image} alt='' />
                        </figure>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{this.props.name}</strong> <br />
                            <small>{this.props.calories} cal</small>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input className="input" type="number" value={this.state.quantity} onChange={this.quantityHandler}/>
                            </div>
                            <div className="control">
                            <button onClick={()=>this.props.addToMenu({name:this.props.name,calories:this.props.calories,quantity:this.state.quantity})} className="button is-info">
                                +
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>
                </div>

            </div>
        )
    }
}
export default FoodBox