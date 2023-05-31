import {
  FILTERED_CHARACTER,
  SELECTED_CHARACTER,
} from "../actions/character.action";

import CHARACTERS from "../../data/Characters";

const initialState = {
  characters: CHARACTERS,
  filteredCharacter: [],
  selectedCharacter: null,
};
const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CHARACTER:
      return {
        ...state,
        selectedCharacter: state.characters.find(
          (characters) => characters.idCharacter === action.idCharacter
        ),
      };

    case FILTERED_CHARACTER:
      return {
        ...state,
        filteredCharacter: state.characters.filter(
          (characters) => characters.idFactions === action.idFactions
        ),
      };
    default:
      return state;
  }
};

export default CharacterReducer;
