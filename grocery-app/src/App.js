import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// imported components
import Home from './components/Home';
import Create from './components/Create';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create" component={Create} />

                <Route component={ErrorPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
