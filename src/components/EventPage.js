import React from "react";
import { Link } from "react-router-dom";
import "../css/EventPage.css";

function EventPage(props) {
  const {name,url} =  (props.location && props.location.state) || {};
  return (
    <div className="eventPage">
      <div >
        <img className="imgpalet" src={url} alt={name} />
      </div>
      <div className="titlePalet">
        <h3 className="namePalet">{name}</h3>
        <Link to={{
          pathname:`/movies/${name}/book`,
          state: {name}
        }}>
          <input type="submit" className="ticketButton" value="Book Tickets"></input>
        </Link>
      </div>
    </div>
  );
}

export default EventPage;