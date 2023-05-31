import { USERS } from "../../data/users";
import { CLEAN_USER, SELECTED_USER } from "../actions/users.action";

const initialState = {
  users: USERS,
  selected: null,
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_USER:
      const IndexUser = state.users.findIndex(
        (user) => user.id === action.userId
      );
      if (IndexUser === -1) return state;
      return { ...state, selected: state.users[IndexUser] };
      case CLEAN_USER:
        return {...state, selected: null};
    default:
      return state;
  }
};

export default UsersReducer;
