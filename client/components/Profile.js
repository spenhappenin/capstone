import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import store, { history } from '../store';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('body').css('background-image', '');
    $('body').css('background-color', 'white');
    $('body').css('height', '100vh');
    $('body').css('width', '100%');
  }

  render() {
    return(
      <div>
        <h1 className='center big' style={{color: '#26c5f0'}}> User Profile </h1>
        <br />
        <hr className='got-game' />
        <h4 className='small center'> Coming Soon! </h4>
        <hr className='got-game' />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Profile);
