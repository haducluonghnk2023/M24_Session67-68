import { combineReducers, createStore } from "redux";
import reducerAddBook from "./reducers/addBookReducer";

const rootReducer = combineReducers({
    reducerAddBook,

})
const store = createStore(rootReducer)
export default store;