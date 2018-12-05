import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import { Tickets } from './Tickets';
import './App.css';
class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <div className="logo"></div>
              </div>

             

              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/tickets'>Tickets</Link></li>
                </ul>
              </div>
            </div>
          </nav>


          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/tickets' component={Tickets} />
        </div>
      </BrowserRouter>
    )
  }
}



function mapStateToProps(state) {
  return state;
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 