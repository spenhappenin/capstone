import React, { Component } from 'react';

class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 2
    });
    $('select').material_select();
    $('body').css('background-image', '');
    $('body').css('background-color', 'white');
    $('body').css('height', '100vh');
    $('body').css('width', '100%');
  }



  handleSubmit(e) {
    e.preventDefault();
    let { event_name, sport, event_date, event_time, capacity,
          venue, street_address, event_city, event_state, event_zip,
          skill_level, event_description } = this.refs;
    let lat = sessionStorage.getItem("userLat")
    let lng = sessionStorage.getItem("userLong")

    $.ajax({
      url: '/api/events',
      type: 'POST',
      dataType: 'JSON',
      data: { events: {
        name: event_name.value,
        sport: sport.value,
        date: event_date.value,
        time: event_time.value,
        capacity: capacity.value,
        venue: venue.value,
        street: street_address.value,
        city: event_city.value,
        state: event_state.value,
        zip: event_zip.value,
        skill_level: skill_level.value,
        description: event_description.value,
      }, position: {lat, lng}
    }
    }).done( addEvent => {
      this.props.history.push("/userEvents");
    }).fail( data => {
      console.log(data);
    });

  }

  render() {
    return(
      <div>
        <div className='container center'>
          <h1 className='big' style={{ color: '#26c5f0'}}> Create Event </h1>
          <hr className='got-game' />
          <form  ref='form' onSubmit={this.handleSubmit}>
            <div className='row'>
              <div className='col s6'>
                <label className='left'> Event Name </label>
                <input type='text' placeholder='Rec Basketball' ref='event_name' required />
              </div>

              <div className='col s6'>
                <label className='left'> Sport </label>
                <select ref='sport' className='placeholder' value="" required>
                  <option value="" disabled> </option>
                  <option value='baseball'> Baseball </option>
                  <option value='basketball'> Basketball </option>
                  <option value='badminton'> Badminton </option>
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
                <label className='left'> Date </label>
                <input type='date' className='datepicker' ref='event_date' required />
              </div>

              <div className='col s6'>
                <label className='left'> Time </label>
                <input type='time' ref='event_time' required />
              </div>
            </div>

            <div className='row'>
              <div className='col s6'>
                <label className='left'> Capacity </label>
                <input type='number' placeholder='10' ref='capacity' />
              </div>

              <div className='col s6'>
                <label className='left'> Venue </label>
                <input type='text' placeholder='Dimple Dell Recreation' ref='venue' required />
              </div>
            </div>

            <div className='row'>
              <div className='col s6'>
                <label className='left'> Street Address </label>
                <input type='text' placeholder='1234 USA Drive' ref='street_address' required />
              </div>

              <div className='col s6'>
                <label className='left'> City </label>
                <input type='text' placeholder='Salt Lake City' ref='event_city' required />
              </div>
            </div>

            <div className='row'>
              <div className='col s6'>
                <label className='left'> State </label>
                <select ref='event_state' value="">
                  <option value="" disabled> </option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>

              <div className='col s6'>
                <label className='left'> Zip Code </label>
                <input type='number' placeholder='84011' ref='event_zip' required />
              </div>
            </div>

            <div className='row'>
              <div className='col s8 offset-s2'>
                <label className='center'> Skill Level </label>
                <select ref='skill_level' className='placeholder' value="" required>
                  <option value="" disabled> </option>
                  <option value='Advanced'> Advanced </option>
                  <option value='intermediate'> Intermediate </option>
                  <option value='beginner'> Beginner </option>
                  <option value='Everyone'> Everyone </option>
                </select>
              </div>
            </div>

            <div className='row'>
              <div className='col s12'>
                <label className='left'> Description </label>
                <textarea placeholder='Write Description Here...' ref='event_description'></textarea>
              </div>
            </div>
            <input type='submit' value='Create Event' className='center btn blue' style={{marginTop: '15px', marginBottom: '25px'}} />
          </form>
        </div>
      </div>
    );
  }
}

export default AddEvent;
