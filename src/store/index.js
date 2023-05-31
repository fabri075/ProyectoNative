import { createStore, combineReducers, applyMiddleware } from "redux";
import UsersReducer from "./reducers/users.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    users: UsersReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));