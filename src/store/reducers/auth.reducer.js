import { SIGNIN, SIGNUP, SIGNOUT } from "../actions/auth.action";

const initialState = {
  token: null,
  userId: null,
  register: null,
  email: null
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, token: action.token, userId: action.userId };
    case SIGNIN:
      return { ...state, token: action.token, userId: action.userId, register: action.register, email: action.email };
      case SIGNOUT:
        return { ...state, token: null, userId: null, register: null, email: null};
    default:
      return state;
  }
};
export default AuthReducer;
