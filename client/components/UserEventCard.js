import React, { Component } from 'react';
import { editUserEventCard, deleteUserEventCard } from '../actions/userEvents';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import * as moment from 'moment';
import moment from 'moment';
import Counter from './Counter';

class UserEventCard extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit});
  }

  handleSubmit(e) {
    e.preventDefault();
    let event_name = this.refs.event_name.value;
    let event_sport = this.refs.event_sport.value;
    let event_street = this.refs.event_street.value;
    let event_city = this.refs.event_city.value;
    let event_zip = this.refs.event_zip.value;
    let event_date = this.refs.event_date.value;
    let skill_level = this.refs.skill_level.value;
    let event_time = this.refs.event_time.value;
    let capacity = this.refs.capacity.value;
    let event_state = this.refs.event_state.value;
    let venue = this.refs.venue.value;
    let active = true;
    let description = this.refs.description.value;

    this.props.dispatch(editUserEventCard(this.props.userEvent.id, event_name, event_sport, event_date, event_time, capacity, venue,
                                event_street, event_city, event_state, event_zip, skill_level, description, active ));
    this.toggleEdit();
    this.props.updateqEvents()
  }

  componentDidMount() {
    $('.collapsible').collapsible();
    $('.datepicker').pickadate({
     selectMonths: true,
     selectYears: 2
   });
   $('select').material_select();
  }

  componentDidUpdate() {
    $('.collapsible').collapsible();
    $('.datepicker').pickadate({
     selectMonths: true,
     selectYears: 2
   });
   $('select').material_select();
  }

  edit() {
    let { name, description, sport, venue, capacity, street, city, state, zip, skill_level, date, time } = this.props.userEvent;
    let timeFormat = moment(time, 'YYYY MM DD hh:mm:ss z' ).format("HH:mm");
    return(
      <div>
        <ul className="collapsible" data-collapsible="accordion" style={{borderRadius: '5px'}} >
          <li>
            <form className='container' onSubmit={this.handleSubmit}>
              <div className='row'>
                <div className='col s6'>
                  <label> Name: </label>
                  <input type='text' defaultValue= {name} ref='event_name' required />
                </div>
                <div className='col s6'>
                  <label className='left'> Sport </label>
                  <select ref='sport' className='placeholder' defaultValue={sport} ref='event_sport' required>
                    <option value='baseball'> Baseball </option>
                    <option value='basketball'> Basketball </option>
                    <option value='football'> Football </option>
                    <option value='frisbee'> Frisbee </option>
                    <option value='golf'> Golf </option>
                    <option value='hockey'> Hockey </option>
                    <option value='kickball'> Kickball </option>
                    <option value='lacrosse'> Lacrosse </option>
                    <option value='ping pong'> Ping Pong </option>
                    <option value='soccer'> Soccer </option>
                    <option value='tennis'> Tennis </option>
                    <option value='volleyball'> Volleyball </option>
                  </select>
                </div>
              </div>
              <div className='row'>
                <div className='col s6'>
                  <label> Capacity: </label>
                  <input type='text' defaultValue= {capacity} ref='capacity' required />
                </div>
                <div className='col s6'>
                  <label> Location: </label>
                  <input type='text' defaultValue= {venue} ref='venue' required />
                </div>
              </div>
              <div className='row'>
                <div className='col s6'>
                  <label> Address: </label>
                  <input type='text' defaultValue= {street} ref='event_street' required />
                </div>
                <div className='col s6'>
                  <label> City: </label>
                  <input type='text' defaultValue= {city} ref='event_city' required />
                </div>
              </div>
              <div className='row'>
                <div className='col s6'>
                  <label> State: </label>
                  <input type='text' defaultValue= {state} ref='event_state' required />
                </div>
                <div className='col s6'>
                  <label> Zip: </label>
                  <input type='number' defaultValue= {zip} ref='event_zip' required />
                </div>
              </div>

              <div className='row'>
                <div className='col s12'>
                  <label className='center'> Skill Level </label>
                  <select ref='skill_level' className='placeholder' defaultValue={skill_level} required>
                    <option value="" disabled> </option>
                    <option value='Open'> Open </option>
                    <option value='AA'> AA </option>
                    <option value='A'> A </option>
                    <option value='B'> B </option>
                    <option value='Novice'> Novice </option>
                    <option value='Everyone'> Everyone </option>
                  </select>
                </div>
              </div>
                <br />
                <div className='row'>
                  <div className='col s12'>
                    <label> Description: </label>
                    <textarea defaultValue= {description} ref='description'></textarea>
                  </div>
                </div>
                <br />
                <div className='row'>
                  <div className='col s6'>
                    <label> Date: </label>
                    <input type='date' defaultValue= {date}  className='datepicker' ref='event_date' required />
                  </div>
                  <div className='col s6'>
                    <label> Time: </label>
                    <input type='time' defaultValue= {timeFormat}  ref='event_time' required />
                  </div>
                </div>
                <div>
                  <button style={{ marginBottom: '22px'}} type='submit' className='btn-flat comment-btn'><span className='blue-text'>Save</span></button>
                  <button style={{ marginBottom: '22px'}} type='button' onClick={this.toggleEdit} className='btn-flat comment-btn right'><span className='red-text'>Cancel</span></button>
                </div>
              </form>
            </li>
          </ul>
        </div>
      );
    }

  showDescription(sportEvent) {
    if(sportEvent.description.length) {
      return(
        <div className='row center'>
          <div className='col s12'>
            <span className='big' style={{fontWeight: '900', fontSize: '16px'}}>Description</span>: <span className='small' style={{fontSize: '15px'}}>{ sportEvent.description }</span>
          </div>
        </div>
      )
    }
  }

  display() {
    let sportEvent = this.props.userEvent;
    let dateFormat = moment(sportEvent.date ).format('MMMM Do YYYY');
    let timeFormat = moment(sportEvent.time, 'YYYY MM DD hh:mm:ss z' ).format('h:mm a');
    let id = `userEvent-${this.props.userEvent.id}`
    let sportPic;

    switch(sportEvent.sport) {
      case 'basketball':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630389/basketball_pin_ioirxi.png';
        break;
      case 'baseball':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630387/baseball_pin_inl5v6.png';
        break;
      case 'football':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630392/football_pin_ghzsia.png';
        break;
      case 'soccer':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630845/soccer_pin_zeme2b.png';
        break;
      case 'kickball':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630404/kickball_pin_pulxzn.png';
        break;
      case 'badminton':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630863/badminton_pin_ymxsft.png';
        break;
      case 'volleyball':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630414/volleyball_pin_t4gakn.png';
        break;
      case 'tennis':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630411/tennis_pin_zazlxl.png';
        break;
      case 'pingpong':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630407/pong-pin_mzqmgs.png';
        break;
      case 'hockey':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630397/hockey_pin_q7kror.png';
        break;
      case 'golf':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630394/golf_pin_vhluyz.png';
        break;
      case 'frisbee':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483656273/frisbee_pin_jrawjp.png';
        break;
      case 'lacrosse':
        sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483656252/lacrosse_pin_qlsw3t.png';
        break;
      default:
        sportPic = "https://static-cdn.jobisjob.com/img/maps/marker-icon.png"
    }

      let userEvent = this.props.userEvent;
      let user = this.props.user.id;
      if(userEvent.user_id === user ) {
        return(
          <div id={id}>
            <ul className="collapsible" data-collapsible="accordion" style={{borderRadius: '5px'}} >
              <li>
                <div className="collapsible-header card-color flex " >
                  <div className='col s3'>
                    <img className='responsive-img' src={ sportPic } alt='Sport Icon' />
                  </div>
                  <div>
                    <h5 style={{color: '#26c5f0'}}>{ sportEvent.name }</h5>
                  </div>
                  <div className='row event-street'>
                    <div className='col s4 m4 small' style={{fontSize: '16px'}}>
                      { sportEvent.street }
                    </div>
                    <div className='col s4 m4 small' style={{fontSize: '16px'}}>
                     { sportEvent.distance_from_user } Miles
                    </div>
                  </div>
                </div>

                <div className="collapsible-body" style={{ padding: '10px' }}>
                    <div className='row center'>
                      <div className='col s4'>
                        <span className='big' style={{fontWeight: '900', fontSize: '16px'}}>Skill Level</span>: <span className='small' style={{fontSize: '15px'}}>{ sportEvent.skill_level }</span>
                      </div>
                      <div className='col s4'>
                        <span className='big' style={{fontWeight: '900', fontSize: '16px'}}>Capacity</span>: <span className='small' style={{fontSize: '15px'}}>{userEvent.attending.length}/{ sportEvent.capacity }</span>
                      </div>
                      <div className='col s4'>
                        <span className='big' style={{fontWeight: '900', fontSize: '16px'}}>Time</span>: <span className='small' style={{fontSize: '15px'}}> {timeFormat} </span>
                      </div>
                    </div>
                    <div className='row center'>
                      <div className='col s6'>
                        <span className='big' style={{fontWeight: '900', fontSize: '16px'}}>Date</span>: <span className='small' style={{fontSize: '15px'}}> {dateFormat}</span>
                      </div>
                      <div className='col s6'>
                        <span className='big' style={{fontWeight: '900', fontSize: '16px'}}>Location</span>: <span className='small' style={{fontSize: '15px'}}>{ sportEvent.venue }</span>
                      </div>
                    </div>
                    { this.showDescription(sportEvent) }
                    <div className='row center'>
                    <div className='col s12'>
                     <Counter userEvent={sportEvent} capacity={sportEvent.capacity} />
                     <Counter capacity={sportEvent.capacity} />
                       <button type='button' onClick={() => this.props.dispatch(deleteUserEventCard(sportEvent.id))} className='btn-flat right'><i className='material-icons red-text'>delete</i></button>
                       <button type='button' onClick={this.toggleEdit} className='btn-flat right' style={{marginRight: '5px'}}><i className="material-icons green-text">mode_edit</i></button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          );

           } else {
            return(
              <div id={id}>
                <ul className="collapsible card-ul" data-collapsible="accordion" style={{borderRadius: '5px'}} >
                  <li>
                    <div className="collapsible-header card-color flex " >
                      <div className='col s3'>
                        <img className='responsive-img' src={ sportPic } alt='Sport Icon' />
                      </div>
                      <div>
                        <h5 style={{color: '#26c5f0'}}>{ sportEvent.name }</h5>
                      </div>
                      <div className='row event-street'>
                        <div className='col s4 m4 small' style={{fontSize: '16px'}}>
                          { sportEvent.street }
                        </div>
                        <div className='col s4 m4 small' style={{fontSize: '16px'}}>
                         { sportEvent.distance_from_user } Miles
                        </div>
                      </div>
                    </div>

                    <div className="collapsible-body" style={{ padding: '10px' }}>
                        <div className='row center'>
                          <div className='col s4'>
                            <span  className='big' style={{fontWeight: '900', fontSize: '16px'}}>Skill Level</span>: <span className='small' style={{fontSize: '15px'}}>{ sportEvent.skill_level }</span>
                          </div>
                          <div className='col s4'>
                            <span className='big' style={{fontWeight: '900', fontSize: '16px'}}>Capacity</span>: <span className='small' style={{fontSize: '15px'}}>{userEvent.attending.length}/{ sportEvent.capacity }</span>
                          </div>
                          <div className='col s4'>
                            <span className='big' style={{fontWeight: '900', fontSize: '16px'}}>Time</span>: <span className='small' style={{fontSize: '15px'}}>{timeFormat}</span>
                          </div>
                        </div>
                        <div className='row center'>
                          <div className='col s6'>
                            <span className='big' style={{fontWeight: '900', fontSize: '16px'}}>Date</span>: <span className='small' style={{fontSize: '15px'}}>{dateFormat}</span>
                          </div>
                          <div className='col s6'>
                            <span className='big' style={{fontWeight: '900', fontSize: '16px'}}>Location</span>: <span className='small' style={{fontSize: '15px'}}>{ sportEvent.venue }</span>
                          </div>
                        </div>
                        { this.showDescription(sportEvent) }
                        <div className='center'>
                          <Counter userEvent={sportEvent} capacity={sportEvent.capacity}/>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              );
            }
          }

  render() {
    if(this.state.edit) {
      return(this.edit());
    }else{
      return(this.display());
    }
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserEventCard);
