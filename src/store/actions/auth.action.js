import { URL_AUTH_SIGNUP } from "../../constants/database";

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";

export const signUp = (email, password,imageUri) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGNUP, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      dispatch({
        type: SIGNUP,
        token: data.idtoken,
        userId: data.localId,
        email,
        imageUri,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

