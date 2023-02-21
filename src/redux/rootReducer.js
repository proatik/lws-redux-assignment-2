import { combineReducers } from "redux";

import bookingReducer from "./booking/bookingReducer";

const rootReducer = combineReducers({
  booking: bookingReducer,
});

export default rootReducer;
