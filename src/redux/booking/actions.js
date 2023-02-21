import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

export const addBooking = (values) => {
  return {
    type: ADD_BOOKING,
    payload: { ...values },
  };
};

export const removeBooking = (id) => {
  return {
    type: REMOVE_BOOKING,
    payload: { id },
  };
};
