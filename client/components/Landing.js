import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import store, { history } from '../store';
import LandingSignIn from './LandingSignIn';
import { connect } from 'react-redux';

class Landing extends Component {
  constructor(props) {
    super(props)

    this.homeSignedIn = this.homeSignedIn.bind(this)
    this.homeSignedOut = this.homeSignedOut.bind(this)
  }

  componentDidMount() {
    $('.parallax').parallax();
    $('.slider').slider({full_width: true, indicators: false});
  }

  handleClick() {
    location.href='/signup';
  }

  homeSignedIn() {
    return(
      <div className="box">
        <div className="landing-image">
          <div className="parallax"> <img className='responsive-img' src="http://res.cloudinary.com/omash612/image/upload/c_scale,w_2060/v1483657677/basketball_landing_iglcrw.jpg" alt='Picture of athletes lined up' /> </div>
        </div>
        <div className='what-is-pug'>
          <div className='col s12'>
            <h1 className='white-text'>Looking for some extra playing time?</h1>
            <p className='white-text'>Connect on PUG to find hundreds of pick-up games in your area.</p>
            <p className='white-text'>Meet for some casual backyard pick-up, or schedule a time every week.</p>
            <p className='white-text'>Whatever your sport, PUG gets you in the game.</p>
          </div>
        </div>
        <div className='parallax-container'>
          <div className='parallax'> <img className='responsive-img' src='http://res.cloudinary.com/omash612/image/upload/c_scale,h_800,w_1763/v1483472712/hdBasketballCourt_b8cm4f.jpg' alt='Picture of sunny basketball court' /> </div>
        </div>
        <div className='sign-up'>
            <div className='row'>
              <div className='col s12'>
                <h1 className='white-text center'> Got Game? Put it on the PUG. </h1>
              </div>
              <div className='row'>
                <div className='col s12'>
                  <p className='white-text center'> Schedule an event or find the right match up for you. </p>
                </div>
              </div>
              <div className='row'>
              </div>
            </div>
          <div className='parallax-container'>
            <div className='parallax'> <img className='responsive-img' src='http://res.cloudinary.com/omash612/image/upload/c_scale,h_800,w_1763/v1483594313/soccerTeam_a8jcvz.jpg' alt='Picture of soccer team huddled together at night' /> </div>
          </div>
          <div className='sign-up'>
            <div className='row'>
              <div className='col s12'>
                <h1 className='center white-text'> Get out and Play! </h1>
              </div>
            </div>
            <div className='row'>
              <div className='col s12'>
                <p className='white-text center'>What are you waiting for? Join PUG now and compete with players like you. </p>
              </div>
            </div>
          </div>
          <div className='parallax-container'>
            <div className='parallax'> <img className='responsive-img' src='http://res.cloudinary.com/omash612/image/upload/v1483467364/volleyball-background_h5pwkx.jpg' alt='Picture of beach volleyball' /> </div>
          </div>
          <About />
        </div>
      </div>
    );
  }

  homeSignedOut() {
    return(
      <div className="box">
        <div className="landing-image">
        <LandingSignIn history={history}/>
          <div className="parallax"> <img className='responsive-img' src="http://res.cloudinary.com/omash612/image/upload/c_scale,w_2060/v1483657677/basketball_landing_iglcrw.jpg" alt='Picture of athletes lined up' /> </div>
        </div>
        <div className='what-is-pug'>
          <div className='col s12'>
            <h1 className='white-text'>Looking for some extra playing time?</h1>
            <p className='white-text'>Connect on PUG to find hundreds of pick-up games in your area.</p>
            <p className='white-text'>Meet for some casual backyard pick-up, or schedule a time every week.</p>
            <p className='white-text'>Whatever your sport, PUG gets you in the game.</p>
          </div>
        </div>
        <div className='parallax-container'>
          <div className='parallax'> <img className='responsive-img' src='http://res.cloudinary.com/omash612/image/upload/c_scale,h_800,w_1763/v1483472712/hdBasketballCourt_b8cm4f.jpg' alt='Picture of sunny basketball court' /> </div>
        </div>
        <div className='sign-up'>
            <div className='row'>
              <div className='col s12'>
                <h1 className='white-text center'> Got Game? Put it on the PUG. </h1>
              </div>
              <div className='row'>
                <div className='col s12'>
                  <p className='white-text center'> Schedule an event or find the right match up for you. </p>
                </div>
              </div>
              <div className='row'>
                <div className='col s12 center'>
                  <button type='button' onClick={this.handleClick} className='btn green sign-up-btn'> Sign Up </button>
                </div>
              </div>
            </div>
          <div className='parallax-container'>
            <div className='parallax'> <img className='responsive-img' src='http://res.cloudinary.com/omash612/image/upload/c_scale,h_800,w_1763/v1483594313/soccerTeam_a8jcvz.jpg' alt='Picture of soccer team huddled together at night' /> </div>
          </div>
          <div className='sign-up'>
            <div className='row'>
              <div className='col s12'>
                <h1 className='center white-text'> Get out and Play! </h1>
              </div>
            </div>
            <div className='row'>
              <div className='col s12'>
                <p className='white-text center'>What are you waiting for? Join PUG now and compete with players like you. </p>
              </div>
            </div>
          </div>
          <div className='parallax-container'>
            <div className='parallax'> <img className='responsive-img' src='http://res.cloudinary.com/omash612/image/upload/v1483467364/volleyball-background_h5pwkx.jpg' alt='Picture of beach volleyball' /> </div>
          </div>
          <About />
        </div>
      </div>
    );
  }

  render() {
    if(this.props.user.id) {
      return(this.homeSignedIn());
    }else{
      return(this.homeSignedOut());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Landing);
