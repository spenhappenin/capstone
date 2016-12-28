import React, { Component } from 'react';
import About from './About';
import Picture from './Picture';
import Contact from './Contact';
import NavBar from './NavBar';

class Landing extends Component {

  render() {
    return(
			<div className="box">
			  <div className="rows header">
			  	<NavBar />
			  </div>
			  <div className="rows content">
			    <Picture />
			  </div>
			    <About />
        	<Contact />
			</div>
    );
  }
}

export default Landing;




       
