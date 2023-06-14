import { createStore, combineReducers, applyMiddleware } from "redux";
import UsersReducer from "./reducers/users.reducer";
import thunk from "redux-thunk";
import ProductsReducer from "./reducers/products.reducer";

const RootReducer = combineReducers({
    users: UsersReducer,
    products: ProductsReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));