import {
  CHANGE_MODE_DARK,
  CHANGE_MODE_LIGHT,
  DARK_MODE,
  EDIT_USER_DATA,
  GET_USER_DATA,
  LOADAPP,
  LOG_OUT,
  SEND_RESET_PASSWORD,
  SIGNIN,
  SIGNUP,
} from "../actions/auth.action";

const inialState = {
  idToken: null,
  localId: null,
  userData: [],
  mode: "Light",
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
        mode: action.mode,
      };
    case SEND_RESET_PASSWORD:
      return state;
    case LOG_OUT:
      return {
        ...state,
        idToken: null,
        localId: null,
        mode: "Light",
        userData:[],
      };
    case LOADAPP:
      return {
        ...state,
        localId: action.localId,
        mode: action.mode,
      };
    case GET_USER_DATA:
      return {
        ...state,
        userData: action.userData.find(
          (user) => user.localId === action.localId
        ),
      };
    case EDIT_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    case DARK_MODE:
      return { ...state, mode: action.mode };
    case CHANGE_MODE_DARK:
      return state;
    case CHANGE_MODE_LIGHT:
      return state;
    default:
      return state;
  }
};

export default AuthReducer;
