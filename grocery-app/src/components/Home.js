import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: []
         }
    }

    async componentDidMount(){
        try{
            setInterval(async () => {
                await axios.get('http://localhost:8181/api/grocerylist')
                .then((function(res){
                    this.setState({
                        items: res.data
                    });
                }).bind(this))
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
            }, 300);
        }
        catch(e){

        }
    }

    render(){
        // console.log(this.state.items);

        const grocery_items  = this.state.items;

        let items = grocery_items.map((item, index) => {
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
            
                                {items}
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        );
    }
}

export default Home;