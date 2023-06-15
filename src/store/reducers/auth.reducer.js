import { SIGNUP } from "../actions/auth.action";

const inialState = {
  token: null,
  userId: null,
  imageUri: null,
  email: null,
};

const AuthReducer = (state = inialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        imageUri: action.imageUri,
        email: action.email,
      };
    default:
      return state;
  }
};

export default AuthReducer;
