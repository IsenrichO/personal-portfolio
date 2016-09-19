import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/footer_component';


class App extends Component {
  render() {
    return (
      <Footer />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
