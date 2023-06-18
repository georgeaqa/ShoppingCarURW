export const URL_API = "https://shoppingurw-default-rtdb.firebaseio.com/";

export const URL_AUTH_SIGNUP =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDk2t3LA3GcL5xIXk3EMd0Fi5W75yWuBLM";

export const URL_AUTH_SIGNIN =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDk2t3LA3GcL5xIXk3EMd0Fi5W75yWuBLM";

export const URL_AUTH_SEND_RESET_PASSWORD =
  "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDk2t3LA3GcL5xIXk3EMd0Fi5W75yWuBLM";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("shoppingURW.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, localId TEXT NOT NULL, name TEXT  NOT NULL, lastName TEXT  NOT NULL, email TEXT  NOT NULL, imageUri TEXT  NOT NULL)",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const addUser = (localId, name, lastName, email, imageUri) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO users (localId, name, lastName, email, imageUri) VALUES (?,?,?,?,?)",
        [localId, name, lastName, email, imageUri],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const getUser = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
