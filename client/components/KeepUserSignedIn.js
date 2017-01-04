import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';

class KeepUserSignedIn extends React.Component {
  componentDidMount() {
    if(!Object.keys(this.props.user).length)
      this.props.dispatch(refreshLogin());
  }

  render() {
    return this.props.children
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(KeepUserSignedIn);
