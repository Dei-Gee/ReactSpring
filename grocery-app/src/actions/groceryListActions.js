import axios from "axios";
import { GET_ERRORS } from "./types";

export const addGroceryItem = (grocery_item, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8181/api/grocerylist/add", grocery_item);
        history.push("/");

    } catch (err) {
        dispatch({
            type: GET_ERRORS, 
            payload: err.response.data
        })
        
    }
}