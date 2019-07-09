import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                    <div className="container justify-content-center">
                        <h2 className="bg-primary p-4 text-white text-center">Welcome to the Grocery List!</h2>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </nav>         
            
                <div className="addProjectTask">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <NavLink to="/" className="btn btn-light">
                                    Back to List
                                </NavLink>
                                
                                <h4 class="text-center my-3">Add /Update Grocery Item</h4>

                                <form className="col-md-8 mx-auto">
                                    <div className="form-group">
                                        <input type="text" class="form-control form-control-lg" name="item_name" placeholder="Item Name" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" name="item_quantity" placeholder="Item Quantity" />
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Create;