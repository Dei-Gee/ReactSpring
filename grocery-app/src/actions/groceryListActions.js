import axios from "axios";

export const addGroceryItem = (grocery_item, history) => async dispatch => {
    await axios.post("http://localhost:8181/api/grocerylist/add", grocery_item);

    history.push("/");
}