import { URL_AUTH_SEND_RESET_PASSWORD, URL_AUTH_SIGNIN, URL_AUTH_SIGNUP } from "../../constants/database";

import { Alert } from "react-native";

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN"
export const SEND_RESET_PASSWORD="SEND_RESET_PASSWORD";

export const signUp = (email, password) => {
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
      });
      if (data.error.message === "EMAIL_EXISTS") {
        Alert.alert(
          "La dirección de correo electrónico ya está en uso por otra cuenta."
        );
      }
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
      const data = await response.json();
      dispatch({
        type: SIGNIN,
        token: data.idtoken,
        userId: data.localId,
      });
      switch (data.error.message) {
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
          requestType:"PASSWORD_RESET",
          email,
        }),
      });
      const data = await response.json();
      dispatch({
        type: SEND_RESET_PASSWORD,
      });
      if (data.email){
        Alert.alert(
          "Email de recuperación enviado correctamente."
        );
      }
      if (data.error.message === "EMAIL_NOT_FOUND") {
        Alert.alert(
          "No existe email."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
}
