import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventPage from "./components/EventPage";
import Recommendation from "./components/Recommendation";
import BookingPage from "./components/BookingPage";
import TicketBookingPage from "./components/TicketBookingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <Recommendation />
          </Route>
          <Route component={TicketBookingPage} path="/movies/:name/book/tickets" />
          <Route component={BookingPage}  path="/movies/:name/book" />
          <Route component={EventPage} path="/movies/:name" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
