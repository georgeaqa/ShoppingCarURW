import { applyMiddleware, combineReducers, createStore } from "redux";

import CartReducer from "./reducers/cart.reducer";
import CharacterReducer from "./reducers/character.reducer";
import FactionReducer from "./reducers/faction.reducer";
import ordersReducer from "./reducers/order.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  factions: FactionReducer,
  characters: CharacterReducer,
  cart: CartReducer,
  orders: ordersReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
