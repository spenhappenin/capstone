import React, { Component } from 'react';
import About from './About';
import Picture from './Picture';
import Contact from './Contact';
import NavBar from './NavBar';

class Landing extends Component {

  componentDidMount() {
    $('.parallax').parallax();
  }

  render() {
    return(
			<div className="box">
			  <div className="rows content">
			    <Picture />
			  </div>
        <div className="parallax-container">
          <div className="parallax"> <img src="sports_lineup.jpg" /> </div>
        </div>
        <div className='row what-is-go'>
            <div className='col s12'>
              <p className='sign-up-title'>What is GO?</p>
              <p className='sign-up-desc'>Find people to play sports with</p>
              <p className='sign-up-desc'>Create your own events and bring people together!</p>
              <p className='sign-up-desc'>Find people to play sports with</p>
            </div>
        </div>
        <div className='parallax-container'>
          <div className='parallax'> <img src='http://www.liquidnetworx.com/files/2014/10/outside-basketball.jpg' /> </div>
        </div>
			  <About />
        <div className='parallax-container'>
          <div className='parallax'> <img src='http://www.liquidnetworx.com/files/2014/10/outside-basketball.jpg' /> </div>
        </div>
        <div className='sign-up'>
          <div className='row'>
            <div className='col s12'>
              <p className='sign-up-title'> Game On! </p>
              <p className='sign-up-desc'> Find the perfect group of friends for your favorite sport! </p>
              <button type='button' className='btn green sign-up-btn right'> Sign Up </button>
            </div>
          </div>
          <div className='parallax-container'>
            <div className='parallax'> <img src='soccer_field.jpg' /> </div>
          </div>
        </div>
			</div>
    );
  }
}

export default Landing;
