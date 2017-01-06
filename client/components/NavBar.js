import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../actions/auth';
import Flash from '../components/Flash';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.navs = this.navs.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  logout(e) {
    e.preventDefault();
    this.props.dispatch(logout(this.props.history));
  }

  navs() {
    switch(this.props.user.role) {
      case 'user':
      return (
        <div>
          <li><Link className='nav-tabs' to='/'>Home</Link></li>
          <li><Link className='nav-tabs' to='/userEvents'>Events</Link></li>
          <li><Link className='nav-tabs' to='/contact'>Contact</Link></li>
          <li><a className='nav-tabs' style={{ cursor: 'pointer' }} onClick={this.logout}>Logout</a></li>
        </div>
      )
    case 'admin':
      return (
        <div>
          <li> <Link className='nav-tabs' to='/'> Home </Link> </li>
          <li><Link className='nav-tabs' to='/userEvents'>Events</Link></li>
          <li> <Link className='nav-tabs' to='/admin'> Admin </Link> </li>
          <li> <a className='nav-tabs' style={{ cursor: 'pointer' }} onClick={this.logout}> Logout </a> </li>
        </div>
      )
    default:
      return (
        <div>
          <li> <Link className='nav-tabs' to='/'> Home </Link> </li>
          <li> <Link className='nav-tabs' to='/contact'> Contact </Link> </li>
          <li> <Link className='nav-tabs' to='/signup'> Sign Up </Link> </li>
          <li> <Link className='nav-tabs' to='/signin'> Login </Link> </li>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <nav className='nav-bar' style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
          <div className='nav-wrapper'>
          <Link to='/' className='main-logo nav-tabs'> <img className='responsive-img' src='http://res.cloudinary.com/omash612/image/upload/v1483656575/logo_h1y0pg.png' style={{height: '60px', width: '80px' }} />GO</Link>
            <a href='#' data-activates='mobile' className='button-collapse'>
              <i className='fa fa-bars'></i>
            </a>
            <ul className="right hide-on-med-and-down">
              {this.navs()}
            </ul>
            <ul className="side-nav" id="mobile">
            <i className="material-icons">polymer</i>
              {this.navs()}
            </ul>
          </div>
        </nav>
        <Flash />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(NavBar);
