import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addGroceryItem } from '../actions/groceryListActions';
import classnames from 'classnames';
import errorsReducer from '../reducers/errorsReducer';

class Create extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = { 
            item_name: "", 
            item_quantity: 0
         }
    }

    componentWillUpdate(){
        // axios.post("http://localhost:8181/api/grocerylist/add")
        // .then({function(res){
        //     console.log(res)
        // }})
        // .catch()
        // .finally();
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const new_item = {
            name: this.state.item_name, 
            quantity: this.state.item_quantity 
        };

        // console.log(new_item);

        this.props.addGroceryItem(new_item, this.props.history);
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
                                
                                <h4 className="text-center my-3">Add /Update Grocery Item</h4>

                                <form className="col-md-8 mx-auto" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" value={this.state.item_name} name="item_name" id="item_name" placeholder="Item Name" onChange={this.handleChange} />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" value={this.state.item_quantity} name="item_quantity" id="item_quantity" placeholder="Item Quantity" onChange={this.handleChange} />
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

Create.propTypes = {
    addGroceryItem: PropTypes.func.isRequired, 
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(null, {addGroceryItem} ) (Create);