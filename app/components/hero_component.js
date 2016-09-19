import React, { Component } from 'react';


export default class Hero extends Component {

  render() {
    return (
      <div id="hero-container" className="vertical-flex">
        <h1>
          <span>Oliver</span>
          <span>Isenrich</span>
        </h1>
        <nav className="horizontal-flex">
          <a href="https://github.com/IsenrichO">
            <img src="http://goo.gl/j932OM" alt="GitHub OctoCat logo (Black)." />
          </a>
          <a href="https://www.linkedin.com/in/isenricholiver">
            <img src="http://goo.gl/UIzz0I" alt="LinkedIn logo (Blue)." />
          </a>
        </nav>
      </div>
    );
  }
};
