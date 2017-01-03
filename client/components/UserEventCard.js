import React, { Component } from 'react';
import { editUserEventCard, deleteUserEventCard } from '../actions/userEvents';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import * as moment from 'moment';
import moment from 'moment';

class UserEventCard extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false};
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    $('.collapsible').collapsible();
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    let sportEvent = this.props.userEvent;

    let dateFormat = moment(sportEvent.date ).format('MMMM Do YYYY');
    let timeFormat = moment(sportEvent.time, 'YYYY MM DD hh:mm:ss z' ).format('h:mm a');

    let id = `userEvent-${this.props.userEvent.id}`
    return(
      <div>
        <ul className="collapsible" data-collapsible="accordion" >
          <li>
            <div className='col s3 sport-image-container'>
              <img className='responsive-img sport-image' src='http://res.cloudinary.com/omash612/image/upload/v1483467364/basketball_wssdhp.jpg' alt='Basketball Icon' />
            </div>
            <div>
              <h5 id={id}>{ sportEvent.name }</h5>
            </div>
            <div>
              <em>{ sportEvent.street }</em>
            </div>
            <div>
              <em>{ sportEvent.city }, { sportEvent.state }</em>
            </div>
            <div>
              <em>{ sportEvent.zip }</em>
            </div>
            <div className="collapsible-header">
              <a href='#' className='right' onClick={this.handleClick}> Show More </a>
            </div>

            <div className="collapsible-body" style={{ padding: '10px' }}>
              <div>
                Skill Level: <i>{ sportEvent.skill_level }</i>
              </div>
              <br />
              <div>
                Description: { sportEvent.description }
              </div>
              <br />
              <div>
                Date: <i>{ dateFormat }</i>
              </div>
              <div>
                Time: <i>{ timeFormat }</i>
              </div>
              <br />
              <div>
                Location: <i>{ sportEvent.venue }</i>
              </div>
              <div>
                Capacity: <i>{ sportEvent.capacity }</i>
              </div>
              <div>
                <textarea placeholder="comment..."></textarea>
              </div>
              <div>
                <button type='button' className='btn green comment-btn'>Submit</button>
                <button type='button' onClick={() => this.props.dispatch(deleteUserEventCard(sportEvent.id))} className='btn red comment-btn right'>Delete</button>
                <button type='button' onClick={this.toggleEdit} className='btn orange comment-btn right'>Edit</button>
              </div>

            </div>
          </li>
        </ul>
      </div>
    );
  }
}



export default connect() (UserEventCard);
