import {
  LOG_OUT,
  SEND_RESET_PASSWORD,
  SIGNIN,
  SIGNUP,
} from "../actions/auth.action";

const inialState = {
  idToken: null,
  localId: null,
};

const AuthReducer = (state = inialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return state;
    case SIGNIN:
      return {
        ...state,
        idToken: action.idToken,
        localId: action.localId,
      };
    case SEND_RESET_PASSWORD:
      return state;
    case LOG_OUT:
      return{
        ...state,
        idToken: null,
        localId: null,
      }
    default:
      return state;
  }
};

export default AuthReducer;
