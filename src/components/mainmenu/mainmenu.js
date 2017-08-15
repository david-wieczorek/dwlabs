import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Mainmenu extends Component {
  render() {
    return (
      <div className="main-menu">
        <nav>
          <ul className="nav nav-horizontal">
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/map" activeClassName="active">
                Map
              </NavLink>
            </li>
            <li>
              <NavLink to="/fetch" activeClassName="active">
                Fetch Data Test
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Mainmenu;
