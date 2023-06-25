import {
  ADD_CHARACTER,
  CONFIRM_CART,
  DECREASE_CHARACTER,
  INCREASE_CHARACTER,
  IN_CART,
  REMOVE_CHARACTER,
  RESET_CART
} from "../actions/cart.action";

const initialState = {
  characters: [],
  total: 0,
  inCart: false,
};

const sumTotal = (list) => {
  return list
    .map((character) => character.quantity * character.price)
    .reduce((a, b) => a + b, 0);
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_CHARACTER:
      const cleanCart = [...state.characters].filter(
        (character) => character.idCharacter !== action.idCharacter
      );
      return {
        ...state,
        characters: cleanCart,
        total: sumTotal(cleanCart),
      };
    ///
    case ADD_CHARACTER:
      const indexCharacter = state.characters.findIndex(
        (character) => character.idCharacter === action.character.idCharacter
      );
      if (indexCharacter === -1) {
        const character = { ...action.character, quantity: 1 };
        const updateCart = [...state.characters, character];
        return {
          ...state,
          characters: updateCart,
          total: sumTotal(updateCart),
        };
      }

    ///
    case IN_CART:
      const indexCartCharacter = state.characters.findIndex(
        (character) => character.idCharacter === action.idCharacter
      );
      if (indexCartCharacter !== -1) {
        return { ...state, inCart: true };
      }
      return { ...state, inCart: false };

    case INCREASE_CHARACTER:
      const increaseQuantity = [...state.characters].map((character) => {
        if (character.idCharacter === action.idCharacter) character.quantity++;
        return character;
      });
      return {
        ...state,
        characters: increaseQuantity,
        total: sumTotal(increaseQuantity),
      };

    case DECREASE_CHARACTER:
      const decreaseQuantity = [...state.characters].map((character) => {
        if (character.idCharacter === action.idCharacter) {
          if (character.quantity > 1) {
            character.quantity--;
          }
        }
        return character;
      });
      return {
        ...state,
        characters: decreaseQuantity,
        total: sumTotal(decreaseQuantity),
      };

    case CONFIRM_CART:
      return { ...state, characters: [], total: 0 };
    ///
    case RESET_CART:
      return {
        characters: [],
        total: 0,
        inCart: false,
      };
    default:
      return state;
  }
};

export default CartReducer;
