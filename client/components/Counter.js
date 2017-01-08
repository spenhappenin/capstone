import React, { Component } from 'react';
import { connect } from 'react-redux';
import { peopleAttending } from '../actions/userEvents';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.counterContent = this.counterContent.bind(this);
  }

  incrementCount() {
    let user = this.props.user;
    let attendingIds = this.props.userEvent.attending;

    if(!attendingIds.find(id => id === user.id)) {
      attendingIds.push(user.id);
      this.props.dispatch(peopleAttending(this.props.userEvent.id, attendingIds));
    } else {
      alert('You have already joined this event!');
    }
  }

  counterContent() {
    let userEvent = this.props.userEvent;
    if(userEvent) {
      if(userEvent.attending.length === this.props.capacity) {
        return(
          <div>
            <label htmlFor='capacity'>Full</label>
            <button className="btn-flat disabled center">Full</button>
          </div>
        )
      } else if(userEvent.attending.find(id => id === this.props.user.id.toString())) {
        return(
          <div>
            <button className="btn-flat disabled center">Attending</button>
          </div>
        )
      } else {
        return(
          <div>
            <button className="btn center" onClick={this.incrementCount}>Join</button>
          </div>
        )
      }
  }
}

  display() {
   return (
     <div>
      <div>
        <div>
          { this.counterContent() }
        </div>
      </div>
    </div> )
  }

   render() {
     return (
       <div>
         { this.display() }
       </div>
     )
   }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(Counter);
