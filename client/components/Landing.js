import React, { Component } from 'react';
import About from './About';
import Picture from './Picture';
import Contact from './Contact';
import NavBar from './NavBar';

class Landing extends Component {

  componentDidMount() {
    $('.parallax').parallax();
  }

  handleClick() {
    location.href='/signup';
  }

  render() {
    return(
			<div className="box">
			  <div className="rows content">
			    <Picture />
			  </div>
        <div className="parallax-container">
          <div className="parallax"> <img src="http://res.cloudinary.com/omash612/image/upload/v1483467364/sports_lineup_votgbv.jpg" /> </div>
        </div>
        <div className='what-is-go'>
          <div className='col s12'>
            <p className='sign-up-title white-text'>What is GO?</p>
            <p className='sign-up-desc white-text'>Find people to play sports with</p>
            <p className='sign-up-desc white-text'>Create your own events and bring people together!</p>
            <p className='sign-up-desc white-text'>Find people to play sports with</p>
          </div>
        </div>
        <div className='parallax-container'>
          <div className='parallax'> <img src='http://res.cloudinary.com/omash612/image/upload/c_scale,h_800,w_1763/v1483472712/hdBasketballCourt_b8cm4f.jpg' /> </div>
        </div>
        <div className='sign-up'>
          <div className='row'>
            <div className='col s12'>
              <p className='sign-up-title white-text'> Game On! </p>
              <p className='sign-up-desc white-text'> Find the perfect group of friends for your favorite sport! </p>
              <button type='button' onClick={this.handleClick} className='btn green sign-up-btn right'> Sign Up </button>
            </div>
          </div>
          <div className='parallax-container'>
            <div className='parallax'> <img src='http://res.cloudinary.com/omash612/image/upload/c_scale,h_800,w_1763/v1483594313/soccerTeam_a8jcvz.jpg' /> </div>
          </div>
          <div className='sign-up'>
            <div className='row'>
              <div className='col s12'>
                <h1 className='center white-text'> PUT SOMETHING ELSE HERE </h1>
              </div>
            </div>
          </div>
          <div className='parallax-container'>
            <div className='parallax'> <img src='http://res.cloudinary.com/omash612/image/upload/v1483467364/volleyball-background_h5pwkx.jpg' /> </div>
          </div>
          <About />
        </div>
			</div>
    );
  }
}

export default Landing;
