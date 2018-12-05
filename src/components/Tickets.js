import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {SingleTicket} from './SingleTicket';
import tickets from './../models/tickets';

class Tickets extends Component {

    filterByStatus(status)
    {

    }

    clickHandler(searctTerm) {

        

        

            //adding a ticket is an async task
            // step 1: ADD_REQUEST
            // srep 2: ADD_SUCCESS (after 4 sec)
            this.props.dispatch(
                (d) => {
                    console.log(d);
                    d({
                        
                        
                    });
                  
                });

      
   

    }


    render() {

       

        let ticketsOpen = tickets.filter(function(itm){
            return itm.status == "Open";
        });
        let ticketsInProg = tickets.filter(function(itm){
            return itm.status == "In-Progress";
        });
        let ticketsDone = tickets.filter(function(itm){
            return itm.status == "Done";
        });
        

        return (
            <div>
                <div className="container-fluid bg-2 text-center">
                    <h1 className="margin">Tickets list</h1>
                    <div className="container text-center">
                        <input type="text" id="idSearch"></input>
                        <button onClick={() => this.clickHandler("idSearch")}>Search</button>
                    </div>
                     <div className="container text-center divTable">

                     <ul className="nav nav-pills" role="tablist">
                        <li role="presentation" className="active"><a href="javascript:void(0)">Open <span className="badge">
                            {ticketsOpen.length}</span></a>
                        </li>
                        <li role="presentation" className="active"><a href="javascript:void(0)">In-Progress <span className="badge">
                            {ticketsInProg.length}</span></a>
                        </li>
                        <li role="presentation" className="active"><a href="javascript:void(0)">Done <span className="badge">
                            {ticketsDone.length}</span></a>
                        </li>
                    </ul>

                     <div className="divRow">
                        <div className="divCell">
                            {ticketsOpen.map(({ summary, id }) => (
                                <Link key={id} type="button" 
                                    className="col-sm-4 btn btn-default btn-lg" 
                                    to={`${this.props.match.url}/${id}`}
                                >
                                    <p> id : {id}</p> 
                                   <p>summary :{summary}</p>
                                </Link>
                            ))}
                        </div>
                        <div className="divCell">
                            {ticketsInProg.map(({ summary, id }) => (
                                <Link key={id} type="button" 
                                    className="col-sm-4 btn btn-default btn-lg" 
                                    to={`${this.props.match.url}/${id}`}
                                >
                                   <p> id : {id}</p> 
                                   <p>summary :{summary}</p> 
                                </Link>
                            ))}
                        </div>
                        <div  className="divCell">
                            {ticketsDone.map(({ summary, id }) => (
                                <Link key={id} type="button" 
                                    className="col-sm-4 btn btn-default btn-lg" 
                                    to={`${this.props.match.url}/${id}`}
                                >
                                    <p> id : {id}</p> 
                                    <p>summary :{summary}</p>
                                </Link>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>

                <hr />

                <Route path={`${this.props.match.path}/:Id`}
                    component={SingleTicket} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return state;
}

const connectedApp = connect(mapStateToProps)(Tickets);
export { connectedApp as Tickets }; 