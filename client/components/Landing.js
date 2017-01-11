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
  }

  handleClick() {
    location.href='/signup';
  }

  homeSignedIn() {
    return(
      <div className="box">
        <div className="landing-image">
          <LandingSignIn history={history} noLogin={true} />
          <div className="parallax"> <img className='responsive-img actual-landing-image' src="https://res.cloudinary.com/omash612/image/upload/c_scale,w_2060/v1483657677/basketball_landing_iglcrw.jpg" alt='Basketball Shooting' /> </div>
        </div>
        <div className='sign-up'>
          <div className='col s12 center'>
            <h1 className='big' style={{color: '#26c5f0', lineHeight: '100%'}}>Looking for some extra playing time?</h1>
            <p className='small white-text' style={{color: '#26c5f0', lineHeight: '100%'}}>Connect on PUG to find hundreds of pick-up games in your area.</p>
            <p className='small white-text' style={{color: '#26c5f0', lineHeight: '100%'}}>Meet for some casual backyard pick-up, or schedule a time every week.</p>
            <p className='small white-text' style={{color: '#26c5f0', lineHeight: '100%'}}>Whatever your sport, PUG gets you in the game.</p>
            <img src='http://res.cloudinary.com/omash612/image/upload/v1483630389/basketball_pin_ioirxi.png' alt='Sport Pin' className='center' />
          </div>
        </div>
        <div className='parallax-container'>
          <div className='parallax'> <img className='responsive-img' src='https://res.cloudinary.com/omash612/image/upload/c_scale,h_800,w_1763/v1483472712/hdBasketballCourt_b8cm4f.jpg' alt='Picture of sunny basketball court' /> </div>
        </div>
        <div className='sign-up2'>
          <div className='row'>
            <div className='col s12'>
              <h1 className=' big center' style={{color: '#26c5f0'}}> Got Game? Put it on the PUG. </h1>
              <p className='small center white-text' style={{lineHeight: '70%'}}> Schedule an event or find the right match up for you. </p>
            </div>
          </div>
          <br />
          <br />
          <hr className='got-game'/>
        </div>
        <div className='parallax-container'>
          <div className='parallax'> <img className='responsive-img' src='https://res.cloudinary.com/omash612/image/upload/c_scale,h_800,w_1763/v1483594313/soccerTeam_a8jcvz.jpg' alt='Picture of soccer team huddled together at night' /> </div>
        </div>
        <div className='sign-up'>
          <div className='row'>
            <div className='col s12'>
              <h1 className='center big' style={{ color: '#ff7821'}}> Get out and Play! </h1>
            </div>
          </div>
          <div className='row'>
            <div className='col s12 center'>
              <p className='small center white-text'>What are you waiting for? Join PUG now and compete with players like you. </p>
              <img src='http://res.cloudinary.com/omash612/image/upload/v1483630414/volleyball_pin_t4gakn.png' alt='Volleyball Pin' style={{marginTop: '30px'}} />
            </div>
          </div>
        </div>
        <div className='parallax-container'>
          <div className='parallax'> <img className='responsive-img' src='https://res.cloudinary.com/omash612/image/upload/v1483467364/volleyball-background_h5pwkx.jpg' alt='Picture of beach volleyball' /> </div>
        </div>
        <About />
      </div>
    );
  }

  homeSignedOut() {
    return(
      <div className="box">
        <div className="landing-image">
          <LandingSignIn history={history}/>
          <div className="parallax"> <img className='responsive-img' src="https://res.cloudinary.com/omash612/image/upload/c_scale,w_2060/v1483657677/basketball_landing_iglcrw.jpg" alt='Basketball Shooting' /> </div>
        </div>
        <div className='sign-up'>
          <div className='col s12 center'>
            <h1 className='big' style={{color: '#26c5f0', lineHeight: '100%'}}>Looking for some extra playing time?</h1>
            <p className='small white-text' style={{color: '#26c5f0', lineHeight: '100%'}}>Connect on PUG to find hundreds of pick-up games in your area.</p>
            <p className='small white-text' style={{color: '#26c5f0', lineHeight: '100%'}}>Meet for some casual backyard pick-up, or schedule a time every week.</p>
            <p className='small white-text' style={{color: '#26c5f0', lineHeight: '100%'}}>Whatever your sport, PUG gets you in the game.</p>
            <img src='http://res.cloudinary.com/omash612/image/upload/v1483630389/basketball_pin_ioirxi.png' alt='Basketball Pin' className='center' />
          </div>
        </div>
        <div className='parallax-container'>
          <div className='parallax'> <img className='responsive-img' src='https://res.cloudinary.com/omash612/image/upload/c_scale,h_800,w_1763/v1483472712/hdBasketballCourt_b8cm4f.jpg' alt='Picture of sunny basketball court' /> </div>
        </div>
        <div className='sign-up2'>
          <div className='row'>
            <div className='col s12'>
              <h1 className=' big center' style={{color: '#26c5f0'}}> Got Game? Put it on the PUG. </h1>
              <p className='small center white-text' style={{lineHeight: '70%'}}> Schedule an event or find the right match up for you. </p>
            </div>
            <div className='row'>
              <div className='col s12 center'>
                <button type='button' onClick={this.handleClick} className='btn orange' style={{marginTop: '35px'}}> Sign Up Now </button>
              </div>
            </div>
          </div>
          <div className='parallax-container'>
            <div className='parallax'> <img className='responsive-img' src='https://res.cloudinary.com/omash612/image/upload/c_scale,h_800,w_1763/v1483594313/soccerTeam_a8jcvz.jpg' alt='Picture of soccer team huddled together at night' /> </div>
          </div>
          <div className='sign-up3'>
            <div className='row'>
              <div className='col s12'>
                <h1 className='center big' style={{ color: '#ff7821', lineHeight: '70%'}}> Get out and Play! </h1>
              </div>
            </div>
            <div className='row'>
              <div className='col s12 center'>
                <p className='small center white-text' style={{lineHeight: '70%'}}>What are you waiting for? Join PUG now and compete with players like you. </p>
                <img src='http://res.cloudinary.com/omash612/image/upload/v1483630414/volleyball_pin_t4gakn.png' alt='Volleyball Pin' style={{marginTop: '30px'}} />
              </div>
            </div>
          </div>
          <div className='parallax-container'>
            <div className='parallax'> <img className='responsive-img' src='https://res.cloudinary.com/omash612/image/upload/v1483467364/volleyball-background_h5pwkx.jpg' alt='Picture of beach volleyball' /> </div>
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
