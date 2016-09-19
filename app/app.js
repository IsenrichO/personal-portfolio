import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hero from './components/hero_component';
import Footer from './components/footer_component';


class App extends Component {
  render() {
    return (
      <main>
        <Hero />
        <Footer />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
