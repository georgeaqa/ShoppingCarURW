import { GET_ORDERS } from "../actions/order.action";

const initial_state = {
  list: [],
};

const ordersReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, list: action.payload.filter(
        (orders) => orders.localId === action.localId
      ) };
    default:
      return state;
  }
};

export default ordersReducer;
