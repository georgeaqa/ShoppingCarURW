import { combineReducers, createStore } from "redux";

import CharacterReducer from "./reducers/character.reducer";
import FactionReducer from "./reducers/faction.reducer";

const RootReducer = combineReducers({
  factions: FactionReducer,
  characters: CharacterReducer,
});

export default createStore(RootReducer);
