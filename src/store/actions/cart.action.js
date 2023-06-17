import { URL_API } from "../../constants/database";

export const ADD_CHARACTER = "ADD_CHARACTER";
export const IN_CART = "IN_CART";
export const INCREASE_CHARACTER = "INCREASE_CHARACTER";
export const DECREASE_CHARACTER = "DECREASE_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const CONFIRM_CART = "CONFIRM_CART";

export const add_character = (character) => ({
  type: ADD_CHARACTER,
  character,
});

export const in_cart = (idCharacter) => ({
  type: IN_CART,
  idCharacter,
});

export const increase_character = (idCharacter) => ({
  type: INCREASE_CHARACTER,
  idCharacter,
});

export const decrease_character = (idCharacter) => ({
  type: DECREASE_CHARACTER,
  idCharacter,
});

export const remove_character = (idCharacter) => ({
  type: REMOVE_CHARACTER,
  idCharacter,
});

export const confirm_CART = (localId,cartCharacters, total) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/ordenes.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          localId,
          date: Date.now(),
          items: { ...cartCharacters },
          total,
        }),
      });
      const result = await response.json();
      console.log(result);
      dispatch({
        type: CONFIRM_CART,
        confirm: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
