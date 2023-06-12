import { SIGNUP } from "../actions/auth.action";

const inialState = {
  token: null,
  userId: null,
};

const AuthReducer = (state = inialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, token: action.token, userId: action.userId };
    default:
      return state;
  }
};

export default AuthReducer;
