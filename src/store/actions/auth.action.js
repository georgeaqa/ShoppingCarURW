import {
  URL_API,
  URL_AUTH_SEND_RESET_PASSWORD,
  URL_AUTH_SIGNIN,
  URL_AUTH_SIGNUP,
  updateStatusUserLogOut,
} from "../../constants/database";

import { Alert } from "react-native";
import { addUser } from "../../constants/database";

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const SEND_RESET_PASSWORD = "SEND_RESET_PASSWORD";
export const LOG_OUT = "LOG_OUT";

export const signUp = (name, lastName, email, password, imageUri) => {
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
      if (!response.ok) {
        const errorResponse = await response.json();
        const errorId = errorResponse.error.message;
        if (errorId === "EMAIL_EXISTS") {
          Alert.alert("El correo electrónico ya está en uso por otra cuenta");
        }
      }
      const data = await response.json();
      const responseUser = await fetch(`${URL_API}/users.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          localId: data.localId,
          name,
          lastName,
          email,
          imageUri,
        }),
      });
      if (responseUser.ok) {
        const responseAddUserDB = await addUser(data.localId);
        console.log(responseAddUserDB);
      }

      dispatch({
        type: SIGNUP,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGNIN, {
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
      if (!response.ok) {
        const errorResponse = await response.json();
        const errorId = errorResponse.error.message;
        switch (errorId) {
          case "EMAIL_NOT_FOUND":
            Alert.alert("Email no existe");
            break;
          case "INVALID_PASSWORD":
            Alert.alert("Contraseña incorrecta");
            break;
          case "USER_DISABLED":
            Alert.alert("Usuario desactivado");
            break;
          default:
            Alert.alert("Excedio el limite de intento, intente más tarde");
            break;
        }
      }
      const data = await response.json();
      dispatch({
        type: SIGNIN,
        idToken: data.idToken,
        localId: data.localId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendResetPassword = (email) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SEND_RESET_PASSWORD, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email,
        }),
      });
      if (!response.ok) {
        const errorResponse = await response.json();
        const errorId = errorResponse.error.message;
        if (errorId === "EMAIL_NOT_FOUND") Alert.alert("No existe email.");
      }
      const data = await response.json();
      if (data.email) {
        Alert.alert("Email de recuperación enviado correctamente.");
      }
      dispatch({
        type: SEND_RESET_PASSWORD,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const logOut = (localId) => {
  return async (dispatch) => {
    try {
      const updatestatus = await updateStatusUserLogOut(localId);
      console.log(updatestatus);
      dispatch({
        type: LOG_OUT,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
