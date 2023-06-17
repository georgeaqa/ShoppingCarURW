import { URL_GET_USER_DATA } from "../../constants/database";

export const GET_USER_DATA = "GET_USER_DATA";

export const getUserData = (idToken) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_GET_USER_DATA, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken,
      }),
    });
    const data = await response.json();
    dispatch({
      type: GET_USER_DATA,
      userData: data.users,
    });
    } catch (error) {
      console.log(error);
    }
    
  };
};
