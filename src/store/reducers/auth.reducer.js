import { SEND_RESET_PASSWORD, SIGNIN, SIGNUP } from "../actions/auth.action";

const inialState = {
  token: null,
  userId: null,
};

const AuthReducer = (state = inialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return state;
    case SIGNIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case SEND_RESET_PASSWORD:
      return state;
    default:
      return state;
  }
};

export default AuthReducer;
