import {
  ADD_CHARACTER,
  CONFIRM_CART,
  REMOVE_CHARACTER,
} from "../actions/cart.action";

const initialState = {
  characters: [],
  total: 0,
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

      const charactersQuantity = [...state.characters].map((character) => {
        if (character.idCharacter === action.character.idCharacter)
          character.quantity++;
        return character;
      });
      return { ...state, characters:charactersQuantity, total: sumTotal(charactersQuantity) };
    ///
    case CONFIRM_CART:
      return state;
    ///
    default:
      return state;
  }
};

export default CartReducer;
