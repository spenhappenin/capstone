import React, { Component } from 'react';
import { editUserEventCard, deleteUserEventCard } from '../actions/userEvents';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
    return(
      <div >
        <ul className="collapsible" data-collapsible="accordion" >
          <li>
            <div className='col s3 sport-image-container'>
              <img className='responsive-img sport-image' src='basketball.jpg' alt='Basketball Icon' />
            </div>
            <div>
              <h5>{ sportEvent.name }</h5>
            </div>
            <div>
              <em>{ sportEvent.street }</em>
            </div>
            <div>
              <em>{ sportEvent.city }</em>
            </div>
            <div>
              <em>{ sportEvent.zip }</em>
            </div>
            <div className="collapsible-header">
              <a href='#' className='right' onClick={this.handleClick}> Show More </a>
            </div>

            <div className="collapsible-body">
              <div>
                Skill Level: <i>{ sportEvent.skill_level }</i>
              </div>
              <br />
              <div>
                Description: { sportEvent.description }
              </div>
              <br />
              <div>
                Date: <i>{ sportEvent.date }</i>
              </div>
              <div>
                Time: <i>{ sportEvent.time }</i>
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
