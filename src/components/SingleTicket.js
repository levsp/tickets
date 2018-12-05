import React, { Component } from 'react';
import { connect } from 'react-redux';


import tickets from './../models/tickets';
import {TicketAction } from './../models/TicketActions';


class SingleTicket extends Component {
    clickHandler(Id, isAddState) {

        var typeParam = TicketAction;

        if (isAddState) {

            //adding a ticket is an async task
            // step 1: ADD_REQUEST
            // srep 2: ADD_SUCCESS (after 4 sec)
            this.props.dispatch(
                (d) => {
                    console.log(d);
                    d({
                        type: typeParam["ADD_REQUEST"],
                        counter: this.props[Id].counter
                    });
                    setTimeout(
                        () => {
                            d({
                                type: typeParam["ADD_SUCCESS"],
                                counter: this.props[Id].counter
                            })
                        }
                        , 5000)
                });

        }
        else {
            //removing a ticket is non - async task
            // single step : REMOVE
            this.props.dispatch({
                type: typeParam["REMOVE"],
                counter: this.props[Id].counter
            })
        }

    }

    render() {

        const ticket = tickets.find(({ id }) => id === this.props.match.params.Id)

        return (
            <div className="container-fluid bg-3 text-center">
                <h2>{ticket.summary}</h2>
                <p>{ticket.description}</p>

                {(this.props.ticket.isAdding )
                 && (<div className="spinner"></div>)}

                <div>
                    <button onClick={() => this.clickHandler(ticket.id, true)}>edit {ticket.summary}</button>
                    <button onClick={this.clickHandler.bind(this, ticket.id, false)}>remove {ticket.summary}</button>
                </div>

            </div>
        )
    }

}


function mapStateToProps(state) {
    return state;
}

const connectedApp = connect(mapStateToProps)(SingleTicket);
export { connectedApp as SingleTicket };