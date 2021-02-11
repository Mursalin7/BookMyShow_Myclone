import React, { Component } from "react";
import "../css/TicketBookingPage.css";
import GridSetter from '../components/GridSetter';
import ConfirmDialog from "./ConfirmDialog";

class TicketBookingPage extends Component {

    constructor() {
        super();
        this.state = {
            seat: [
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
                'C1', 'C2', 'C3', 'C4', 'C5', 'C6'
            ],
            seatAvailable: [
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
                'C1', 'C2', 'C3', 'C4', 'C5', 'C6'
            ],
            seatReserved: [],
            seatSelected: [],
            booked: false
        }
    }

    onClickData = (seat) => {
        if (this.state.seatReserved.indexOf(seat) > -1) {
            this.setState({
                seatAvailable: this.state.seatAvailable.concat(seat),
                seatReserved: this.state.seatReserved.filter(res => res != seat),
            })
        } else {
            this.setState({
                seatReserved: this.state.seatReserved.concat(seat),
                seatAvailable: this.state.seatAvailable.filter(res => res != seat)
            })
        }
    }
    checkTrue = (row) => {
        if (this.state.seatSelected.indexOf(row) > -1) {
            return false
        } else {
            return true
        }
    }

    handleSubmit = () => {
        this.setState({ seatSelected: this.state.seatSelected.concat(this.state.seatReserved) })
        this.setState({
            seatReserved: []
        })
        this.setState({ booked: true });
    }

    render() {
        const { name, time } = (this.props.location && this.props.location.state) || {};
        return (
            <div>
                <h1>{name}</h1>
                <h3> {time}</h3>
                <GridSetter
                    seat={this.state.seat}
                    available={this.state.seatAvailable}
                    reserved={this.state.seatReserved}
                    selected={this.state.seatSelected}
                    onClickData={this.onClickData}
                    checkTrue={this.checkTrue}
                    handleSubmit={this.handleSubmit}
                    booked={this.state.booked}
                />
                {this.state.booked === true ? (
                <ConfirmDialog selected={this.state.seatSelected} />)
                :<div></div>
                }
            </div>
        )
    }
}
export default TicketBookingPage;