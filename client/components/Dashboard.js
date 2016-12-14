import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ user }) => (
  <div>
    {`Welcome ${user.first_name}! `}
  </div>
);

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Dashboard);
