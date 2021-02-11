import React from "react";
import { Link } from "react-router-dom";
import "../css/TicketBookingPage.css";

function GridSetter(props) {
    const { name, time } = (props.location && props.location.state) || {};
    const onClickSeat = (seat) => {
        props.onClickData(seat);
    }
    return (
        <div className="">
            <h4>{name}</h4>
            <p>{time}</p>
            <div className="container">
                <h2></h2>
                <table className="grid">
                    <tbody>
                        <tr>
                            {props.seat.map(row =>
                                <td
                                    className={props.selected.indexOf(row) > -1 ? 'reserved' : (props.reserved.indexOf(row) > -1 ? 'selected' : 'available')}
                                    key={row} onClick={props.checkTrue(row) ? e => onClickSeat(row) : null} >{row} </td>)}
                        </tr>
                    </tbody>
                </table>
                <button type="button" className="btn-success btnmargin" onClick={() => props.handleSubmit()}>Confirm Booking</button>
            </div>
        </div>
    );
}

export default GridSetter;