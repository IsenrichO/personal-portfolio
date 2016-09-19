import React, { Component } from 'react';


export default class Footer extends Component {

  assignCopyrightYear() {
    return (new Date()).getFullYear();
  }

  render() {
    return (
      <div id="footer-container" className="banner">
        {[
          <p style={{ display: "inline" }}>Copyright &copy; Oliver Isenrich,&nbsp;</p>,
          this.assignCopyrightYear()
        ]}
      </div>
    );
  }
};
