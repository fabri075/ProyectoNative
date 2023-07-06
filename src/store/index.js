import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PublicationsReducer from "./reducers/publications.reducer";
import AuthReducer from "./reducers/auth.reducer";

const RootReducer = combineReducers({
  users: AuthReducer,
  publications: PublicationsReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
