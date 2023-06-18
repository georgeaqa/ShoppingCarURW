import { GET_USER_DATA } from "../actions/profile.action";

const initialState = {
  userData: [],
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
    default:
      return state;
  }
};

export default profileReducer;