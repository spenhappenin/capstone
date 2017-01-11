import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../actions/auth';
import { Dropdown } from 'react-materialize';
import { browserHistory } from 'react-router';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    $('.button-collapse').sideNav({
      menuWidth: 200,
      closeOnClick: true,
    }
  );
    $('.dropdown-button').dropdown();
  }

  logout(e) {
    e.preventDefault();
    this.props.dispatch(logout(browserHistory));
  }

  navs() {
    let user = this.props.user;
    switch(user.role) {
      case 'user':
        return(
          <div>
            <li><Link className='nav-tabs' to='/'>Home</Link></li>
            <li><Link className='nav-tabs' to='/userEvents'>Events</Link></li>
            <li><Link className='nav-tabs' style={{marginRight: '15px'}} to='/contact'>Contact</Link></li>
            <Dropdown className='grey' trigger={<li style={{cursor: 'pointer', color: '#26c5f0', marginRight: '10px'}}>{user.first_name} {user.last_name}</li>}>
              <li>
                <Link to='/profile' className='white-text'><i className='material-icons'>perm_identity</i>View Profile</Link>
              </li>
              <li>
                <Link to='/settings' className='white-text'><i className='material-icons'>settings</i>Settings</Link>
              </li>
              <li className='divider'></li>
              <li>
                <a className='black-text' href='#!' onClick={this.logout}>Logout</a>
              </li>
            </Dropdown>
          </div>
        )
      case 'admin':
        return(
          <div>
            <li><Link className='nav-tabs' to='/'> Home </Link> </li>
            <li><Link className='nav-tabs' to='/userEvents'>Events</Link></li>
            <li> <Link className='nav-tabs' to='/admin'> Admin </Link> </li>
            <li> <a className='nav-tabs' style={{ cursor: 'pointer' }} onClick={this.logout}> Logout </a> </li>
          </div>
        )
      default:
        return(
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
      <div style={{ backgroundColor: 'transparent'}}>
        <nav className='nav-bar' style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
          <div className="nav-wrapper">
          <Link className='nav-tabs pug-logo' to='/'>
            <div className="just-pug1">
              <br />
              <p className='nav-tabs'> Get in the Game </p>
            </div>
          </Link>
            <a href='' data-activates='mobile' className='button-collapse'>
              <i className='material-icons nav-tabs'>menu</i>
            </a>
            <ul className="right hide-on-small-and-down">
              {this.navs()}
            </ul>
            <ul className="side-nav" id="mobile">
              <i className="material-icons "></i>
              {this.navs()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(NavBar);
