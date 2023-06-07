import { URL_API } from "../../constants/database";

export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const CONFIRM_CART = "CONFIRM_CART";

export const add_character = (character) => ({
  type: ADD_CHARACTER,
  character,
});

export const remove_character = (idCharacter) => ({
  type: REMOVE_CHARACTER,
  idCharacter,
});

export const confirm_CART = () => ({
  type: CONFIRM_CART,
  payload,
});
