import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addBooking } from "../redux/booking/actions";

import guests from "../assets/icons/guests.svg";
import location from "../assets/icons/location.svg";
import ticketClass from "../assets/icons/ticket-class.svg";

const initialValues = {
  from: "",
  to: "",
  date: "",
  guests: "",
  ticketClass: "",
};

const validateValues = (values) => {
  if (values.from === values.to) {
    alert("✈️ destinations from & to must be different.");
    return false;
  }

  const today = new Date().valueOf();
  const date = new Date(values.date).valueOf();

  if (date <= today) {
    alert("📅 journey date must be an upcoming date.");
    return false;
  }

  return true;
};

function BookingForm() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);
  const bookings = useSelector(({ booking }) => booking.bookings);

  const isDisabled = bookings.length >= 3;

  const changeHandler = (event) => {
    const { name, value } = event.target;

    const updatedValues = {
      ...values,
      [name]: value,
    };

    setValues(updatedValues);
  };

  const addBookingHandler = (event) => {
    event.preventDefault();

    const isValid = validateValues(values);
    if (isValid) {
      dispatch(addBooking(values));

      formRef.current.reset();
    }
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form
          ref={formRef}
          onSubmit={addBookingHandler}
          className="first-hero lws-inputform"
        >
          {/* From */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={location} alt="" />
              <select
                required
                name="from"
                id="lws-from"
                onChange={changeHandler}
                className="outline-none px-2 py-2 w-full"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* To */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={location} alt="" />
              <select
                required
                name="to"
                id="lws-to"
                onChange={changeHandler}
                className="outline-none px-2 py-2 w-full"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              required
              name="date"
              type="date"
              id="lws-date"
              onChange={changeHandler}
              className="outline-none px-2 py-2 w-full date"
            />
          </div>

          {/* Guests */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={guests} alt="" />
              <select
                required
                name="guests"
                id="lws-guests"
                onChange={changeHandler}
                className="outline-none px-2 py-2 w-full"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* Class */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src={ticketClass} alt="" />
              <select
                required
                name="ticketClass"
                id="lws-ticketClass"
                onChange={changeHandler}
                className="outline-none px-2 py-2 w-full"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          {/* Book  */}
          <button
            type="submit"
            id="lws-addCity"
            className="addCity"
            disabled={isDisabled}
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
