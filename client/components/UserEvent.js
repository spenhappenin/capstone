import React from 'react';

class UserEvent extends React.Component {

  display() {
    let sportEvent = this.props.userEvent;
    return(
      <div className="row">
        <div className="col s12 m6">
          <div className="card large blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{  }</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }


  render() {

    return(
      <div>
        { this.display() }
      </div>
    );
  }

}

export default UserEvent;



