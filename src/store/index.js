import { createStore, combineReducers, applyMiddleware } from "redux";
import UsersReducer from "./reducers/users.reducer";
import thunk from "redux-thunk";
import ProductsReducer from "./reducers/products.reducer";
import PublicationsReducer from "./reducers/publications.reducer";

const RootReducer = combineReducers({
    users: UsersReducer,
    products: ProductsReducer,
    publications: PublicationsReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));