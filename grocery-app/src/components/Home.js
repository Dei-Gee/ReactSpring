import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                    <div className="container justify-content-center">
                        <h2 className="bg-primary p-4 text-white text-center">Welcome to the Grocery List!</h2>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span class="navbar-toggler-icon" />
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
            
                                <div className="card my-3 bg-light">
                                    <h5>Item name: </h5>
                                    <h5>Quantity: </h5>
            
                                    <button className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                                <div className="card my-3 bg-light">
                                        <h5>Item name: </h5>
                                        <h5>Quantity: </h5>
            
                                    <button className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        );
    }
}

export default Home;