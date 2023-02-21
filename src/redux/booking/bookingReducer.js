import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

const initialState = {
  uuid: 1,
  bookings: [],
};

const bookingReducer = (state = initialState, action) => {
  // add a new booking.
  switch (action.type) {
    case ADD_BOOKING: {
      const values = action.payload;
      const prevState = structuredClone(state);

      const newBooking = {
        ...values,
        bookingId: prevState.uuid,
      };

      const updatedState = {
        ...prevState,
        uuid: prevState.uuid + 1,
        bookings: [...prevState.bookings, newBooking],
      };

      return updatedState;
    }

    // remove a single booking.
    case REMOVE_BOOKING: {
      const id = action.payload.id;
      const prevState = structuredClone(state);

      const updatedBookings = prevState.bookings.filter(
        (booking) => booking.bookingId !== id
      );

      const updatedState = {
        ...prevState,
        bookings: updatedBookings,
      };

      return updatedState;
    }
    default:
      return state;
  }
};

export default bookingReducer;
