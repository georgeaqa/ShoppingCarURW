import { URL_API } from "../../constants/database";

export const GET_ORDERS = "GET_ORDERS";
export const SELECTED_ORDER = "SELECTED_ORDER";
export const FILTERED_ORDER_DETAIL = "FILTERED_ORDER_DETAIL";

export const getOrders = (localId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/ordenes.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const orders = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      dispatch({ type: GET_ORDERS, payload: orders, localId });
    } catch (error) {
      console.error(error);
    }
  };
};
export const selectedOrder = (id) => ({
  type: "SELECTED_ORDER",
  id,
});