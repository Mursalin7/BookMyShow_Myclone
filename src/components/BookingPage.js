import React from "react";
import { Link } from "react-router-dom";
import "../css/BookingPage.css";

function BookingPage(props) {
    const { name } = (props.location && props.location.state) || {};
    const halls = [{
        name: "Cinepolis,Acropolis Mall,Kolkata",
        timing: ["06:15 PM", "09:30 PM"]
    },
    {
        name: "INOX,City Center,Salt Lake",
        timing: ["08:15 PM"]
    }]
    return (
        <div className="bookingPage">
            <div className="movieHeader" ><h3>{name}</h3></div>
            <div className="hallInfo">
            {halls.map((hall)=> (
                <div>
                <h4>{hall.name}</h4>
                <ul className="hallList">
                { hall.timing.map((t) =>(
                   <Link to={{
                        pathname:`/movies/${name}/book/tickets`,
                        state: {name,time:t}
                    }}>
                     <li key={t}>{t}</li> </Link>
                ))}
                </ul>
                </div>
            ))}
            </div>
        </div>
    );
}

export default BookingPage;