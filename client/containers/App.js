import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../actions/auth';

class App extends React.Component {
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
          <li> <Link to='/'> Home </Link> </li>
          <li> <Link to='/about'> About </Link> </li>
          <li> <Link to='/google_map'> Google Maps </Link> </li>
          <li> <Link to='/contact'> Contact </Link> </li>
          <li> <a style={{ cursor: 'pointer' }} onClick={this.logout}> Logout </a> </li>
        </div>
      )
    case 'admin':
      return (
        <div>
          <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/google_map'> Google Maps </Link> </li>
          <li> <Link to='/admin'> Admin </Link> </li>
          <li> <a style={{ cursor: 'pointer' }} onClick={this.logout}> Logout </a> </li>
        </div>
      )
    default:
      return (
        <div>
          <li> <Link to='/'> Home </Link> </li>
          <li> <Link to='/about'> About </Link> </li>
            <li> <Link to='/google_map'> Google Maps </Link> </li>
          <li> <Link to='/contact'> Contact </Link> </li>
          <li> <Link to='/signup'> Sign Up </Link> </li>
          <li> <Link to='/signin'> Login </Link> </li>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <nav className='purple darken-4'>
          <div className='nav-wrapper'>
            <Link to='/' className='main-logo'>My Logo</Link>
            <a href='#' data-activities='mobile' className='button-collapse'>
              <i className='fa fa-bars'></i>
            </a>
            <ul className="right hide-on-med-and-down">
              {this.navs()}
            </ul>
            <ul className="side-nav" id="mobile">
              {this.navs()}
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(App);
