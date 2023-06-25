import {
  DARK_MODE,
  EDIT_USER_DATA,
  GET_USER_DATA,
} from "../actions/profile.action";

const initialState = {
  userData: [],
  mode: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default profileReducer;
