import axios from "axios";
import { GET_ERRORS, ITEM_CREATED, GET_ITEMS } from "./types";

export const addGroceryItem = (grocery_item, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8181/api/grocerylist/add", grocery_item);
        history.push("/");

        dispatch({
            type: ITEM_CREATED, 
            payload: {}
        });

    } catch (err) {
        dispatch({
            type: GET_ERRORS, 
            payload: err.response.data
        });        
    }
}

export const getGroceryItems = () => async dispatch => {
    try{
        await axios.get("http://localhost:8181/api/grocerylist")
                .then(res => dispatch({
                    type: GET_ITEMS, 
                    payload: res.data
                }));
    }
    catch(err)
    {
        dispatch({
            type: GET_ERRORS, 
            payload: err.response.data
        });   
    }
}