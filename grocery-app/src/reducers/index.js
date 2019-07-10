import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import groceryListReducer from './groceryListReducer';

export default combineReducers({
    errors: errorsReducer, 
    items: groceryListReducer
});
