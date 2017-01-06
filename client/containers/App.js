import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Flash from '../components/Flash';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(App);
