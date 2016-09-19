import React, { Component } from 'react';


export default class Footer extends Component {

  assignCopyrightYear() {
    return (new Date()).getFullYear();
  }

  render() {
    return (
      <footer id="footer-container" className="banner">
        <p>Copyright &copy; Oliver Isenrich { this.assignCopyrightYear() }, All Rights Reserved</p>
      </footer>
    );
  }
};
