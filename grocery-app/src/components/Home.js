import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGroceryItems } from '../actions/groceryListActions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [], 
            errors: {}
         }
    }

    async componentDidMount(){
        try{
            setInterval(async () => {
                this.props.getGroceryItems();
            }, 10000);
        }
        catch(e){
            console.log("can't get items");
        }
    }

    render(){
        console.log(this.state);

        const { items }  = this.props.items;

        let grocery_items = items.map((item, index) => {
            return(
                <div className="card my-3 bg-light" key={index}>
                    <h5 className="text-muted mt-3">Item name:</h5> 
                    <h5 className="text-primary">{item.name}</h5>
                    <h5 className="text-muted mt-3">Quantity: </h5> 
                    <h5 className="text-primary mb-3">{item.quantity}</h5>

                    <button className="btn btn-danger">
                        Delete
                    </button>
                </div>
            );
        });

        return(
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                    <div className="container justify-content-center">
                        <h2 className="bg-primary p-4 text-white text-center">Welcome to the Grocery List!</h2>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </nav>
                
                <div className="container">
                    <NavLink to="/create" className="btn btn-primary mb-3">
                        <i className="fas fa-plus-circle"> Add New Item</i>
                    </NavLink>
                    <br />
                    <hr />
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mx-auto">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-secondary text-white">
                                        <h3>Grocery List</h3>
                                        <NavLink to="/" className="btn btn-primary">
                                            View / Update
                                        </NavLink>
                                    </div>
                                </div>
            
                                {grocery_items}
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    getGroceryItems: propTypes.func.isRequired, 
    errors: propTypes.object.isRequired, 
    items: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors, 
    items: state.items
})

export default connect(mapStateToProps, {getGroceryItems}) (Home);