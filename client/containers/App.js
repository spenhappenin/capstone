import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../actions/auth';
import Flash from '../components/Flash';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.navs = this.navs.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
    $(".dropdown-button").dropdown();
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
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/google_map'>Google Maps</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><a style={{ cursor: 'pointer' }} onClick={this.logout}>Logout</a></li>
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
          <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Login<i className="material-icons right">arrow_drop_down</i></a></li>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li><Link to='adminsignin'>Admin</Link></li>
          <li><Link to='signin'>User</Link></li>
        </ul>

        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>

        <nav className='purple darken-4'>
          <div className='nav-wrapper'>
            <Link to='/' className='main-logo'>My Logo</Link>
            <a href='#' data-activates='mobile' className='button-collapse'>
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
        <Flash />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(App);
