import React, { Component } from 'react';
import About from './About';
import Picture from './Picture';
import Contact from './Contact';

class Landing extends Component {

  render() {
    return(
      <div>
        <Picture />
        <About />
        <Contact />

      </div>
    );
  }
}

export default Landing;
