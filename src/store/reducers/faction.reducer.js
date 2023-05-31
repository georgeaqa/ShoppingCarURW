import FACTIONS from "../../data/Factions";
import { SELECTED_FACTION } from "../actions/faction.action";

const initialState = {
  factions: FACTIONS,
  selectedFaction: null,
};

const FactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_FACTION:
      const indexFaction = state.factions.findIndex(
        (faction) => faction.idFactions === action.idFactions
      );
      if (indexFaction === -1) return state;
      return { ...state, selectedFaction: state.factions[indexFaction] };

    default:
      return state;
  }
};

export default FactionReducer;
