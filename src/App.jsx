import { Fragment } from "react";

// react components.
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import BookingTable from "./components/BookingTable";

const App = () => {
  return (
    <Fragment>
      <Header />
      <BookingForm />
      <BookingTable />
    </Fragment>
  );
};

export default App;
