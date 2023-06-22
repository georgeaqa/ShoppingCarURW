import { URL_API } from "../../constants/database";

export const GET_USER_DATA = "GET_USER_DATA";
export const EDIT_USER_DATA = "EDIT_USER_DATA";

export const getUserData = (localId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/users.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const Data = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      dispatch({ type: GET_USER_DATA, userData: Data, localId: localId });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUserData = (id,localId,name,lastName,email,imageUri) => {
  return async (dispatch) => {
    try {
          const response = await fetch(`${URL_API}/users/${id}.json`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              localId,
              name,
              lastName,
              email,
              imageUri,
            }),
          });
          const result = await response.json();
          dispatch({ type: EDIT_USER_DATA, userData: result });
        } catch (error) {
          console.log(error);
        }
  }
}