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
            <li>
              <a
                href="mailto:davidwieczorekpro@gmail.com"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
        <div className="bloc bloc-darkcolor2 link passion">
          <h5>Skills</h5>
          <ul>
            <li>JS/ES6</li>
            <li>Angular/React</li>
            <li>Html5/Css3/Sass</li>
            <li>Git</li>
            <li>Gulp/Grunt/Webpack</li>
            <li>Leaflet</li>
            <li>Charjs</li>
            <li>D3js</li>
            <li>Nodejs</li>
            <li>Photoshop/Sketch</li>
            <li>UI/UX</li>
            <li>Travis</li>
          </ul>
        </div>
        <div className="bloc bloc-darkcolor2 link passion">
          <h5>Hobbies</h5>
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
