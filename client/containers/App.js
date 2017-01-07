import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Flash from '../components/Flash';
import NavBar from '../components/NavBar';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <NavBar />
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
