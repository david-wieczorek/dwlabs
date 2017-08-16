import React, { Component } from 'react';
import me from './dw.png';

class Welcome extends Component {
  render() {
    return (
      <div>
        <img className="welcome-logo" src={me} alt="Logo" />
        <h3>David Wieczorek</h3>
        <h4>Lead Front End Developer</h4>
        <div className="link">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/dwieczorek"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/david-wieczorek"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" />
              </a>
            </li>
          </ul>
        </div>
        <div className="bloc link passion">
          <h4>Passions</h4>
          <ul>
            <li>Code</li>
            <li>Techs</li>
            <li>Ice Hockey</li>
            <li>Music</li>
            <li>Drum</li>
            <li>Art</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Welcome;
