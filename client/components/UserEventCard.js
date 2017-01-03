import React, { Component } from 'react';
import { Link } from 'react-router';

class UserEventCard extends Component {

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
              <img className='responsive-img sport-image' src='http://res.cloudinary.com/omash612/image/upload/v1483467364/basketball_wssdhp.jpg' alt='Basketball Icon' />
            </div>
            <div>
              <h5>{ sportEvent.name }</h5>
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
              </div>

            </div>
          </li>
        </ul>
      </div>
    );
  }
}



export default UserEventCard;
