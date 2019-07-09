import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ErrorPage extends Component {
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

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span class="navbar-toggler-icon" />
                        </button>
                    </div>
                </nav>

                <NavLink to="/" class="btn btn-light">
                    Back to List
                </NavLink>

                <section className="text-center my-3 display-4">
                    Error! Go back!
                </section>
            </div>
         );
    }
}
 
export default ErrorPage;