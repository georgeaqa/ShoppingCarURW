import {
  URL_API,
  URL_AUTH_SEND_RESET_PASSWORD,
  URL_AUTH_SIGNIN,
  URL_AUTH_SIGNUP,
  addUser,
  getThemeMode,
  updateChangeModeDark,
  updateChangeModeLight,
  updateStatusUserLogOut,
  updateStatusUserSignIn,
  userConnected,
  userExist,
} from "../../constants/database";

import { Alert } from "react-native";

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const SEND_RESET_PASSWORD = "SEND_RESET_PASSWORD";
export const LOG_OUT = "LOG_OUT";
export const LOADAPP = "LOADAPP";
export const GET_USER_DATA = "GET_USER_DATA";
export const EDIT_USER_DATA = "EDIT_USER_DATA";
export const DARK_MODE = "DARK_MODE";
export const CHANGE_MODE_LIGHT = "CHANGE_MODE_LIGHT";
export const CHANGE_MODE_DARK = "CHANGE_MODE_DARK";

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

      const user = await userExist(data.localId);
      if (!user) {
        const responseAddUserDB = await addUser(data.localId);
        console.log(responseAddUserDB);
      }
      const updatestatus = await updateStatusUserSignIn(data.localId);
      const getTheme = await getThemeMode(data.localId)
      dispatch({
        type: SIGNIN,
        idToken: data.idToken,
        localId: data.localId,
        mode : getTheme.changeMode,
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
      dispatch({
        type: LOG_OUT,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadAPP = () => {
  return async (dispatch) => {
    try {
      const response = await userConnected();
      dispatch({
        type: LOADAPP,
        localId:response.localId,
        mode : response.changeMode,
      });
    } catch (error) {}
  };
};

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

export const editUserData = (id, localId, name, lastName, email, imageUri) => {
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
  };
};

export const darkMode = (mode) => ({
  type: DARK_MODE,
  mode,
});

export const changeDarkMode = (localId) => {
  return async (dispatch) => {
    try {
      const updatestatus = await updateChangeModeDark(localId);
      dispatch({
        type: CHANGE_MODE_DARK,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeLightMode = (localId) => {
  return async (dispatch) => {
    try {
      const updatestatus = await updateChangeModeLight(localId);
      dispatch({
        type: CHANGE_MODE_LIGHT,
      });
    } catch (error) {
      console.log(error);
    }
  };
};