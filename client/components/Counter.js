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
            <h5>{userEvent.attending.length}</h5>
            <button className="btn-flat disabled">Full</button>
          </div>
        )
      } else if(userEvent.attending.find(id => id === this.props.user.id.toString())) {
        return(
          <div>
            <label htmlFor='capacity'>Attending</label>
            <h5>{this.props.userEvent.attending.length}</h5>
            <button className="btn-flat disabled">Attending</button>
          </div>
        )
      } else {
        return(
          <div>
            <label htmlFor='capacity'>Attending</label>
            <h5>{userEvent.attending.length}</h5>
            <button className="btn" onClick={this.incrementCount}>Join</button>
          </div>
        )
      }
    } else {
      return(<div>Loading Counter...</div>);
    }
  }

  display() {
   return (
     <div className='row'>
        <div className='box'>
          <div className='col s12'>
            { this.counterContent() }
          </div>
        </div>
      </div>)
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
