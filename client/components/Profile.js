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
        <h1 className='center'> User Profile </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Profile);
