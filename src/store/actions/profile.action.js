import { URL_API, updateStatusUserSignIn } from "../../constants/database";

export const GET_USER_DATA = "GET_USER_DATA";

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
      const updatestatus= await updateStatusUserSignIn(localId)
      console.log(updatestatus);
      dispatch({ type: GET_USER_DATA, userData: Data, localId: localId });
    } catch (error) {
      console.log(error);
    }
  };
};
