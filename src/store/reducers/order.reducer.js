import {
  FILTERED_ORDER_DETAIL,
  GET_ORDERS,
  RESET_ORDERS,
  SELECTED_ORDER,
} from "../actions/order.action";

const initial_state = {
  list: [],
  filteredOrderDetail: [],
  selectedOrder: null,
};

const ordersReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        list: action.payload.filter(
          (orders) => orders.localId === action.localId
        ),
      };
    case SELECTED_ORDER:
      return {
        ...state,
        selectedOrder: state.list.find((order) => order.id === action.id),
      };
      case RESET_ORDERS:
        return {
          list: [],
        };
    default:
      return state;
  }
};

export default ordersReducer;
