import React, { Component } from 'react';

class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('select').material_select();
  }

  handleSubmit(e) {
    e.preventDefault();
    let { event_name, sport, event_date, event_time, capacity, venue, street_address, event_city, event_state, event_zip, skill_level, event_description } = this.refs;
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
        description: event_description.value
      }
    }
    }).done( addEvent =>{
      console.log(addEvent);
    }).fail( data => {
      debugger
      console.log(data);
    });
  }

  render() {
    return(
      <div className='container center'>
        <h1> Create Event </h1>
        <form onSubmit={this.handleSubmit}>

          <div className='row'>
            <div className='col s6'>
              <label className='left'> Event Name </label>
              <input type='text' placeholder='Rec Basketball' ref='event_name' required />
            </div>
            <div className='col s6'>
              <label className='left'> Sport </label>
              <input type='text' placeholder='basketball' ref='sport' required />
            </div>

          <div className='row'>
            <div className='col s6'>
              <label className='left'> Date </label>
              <input type='date' ref='event_date' required />
            </div>
            <div className='col s6'>
              <label className='left'> Time </label>
              <input type='time' ref='event_time' required />
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
                <select ref='event_state'>
                  <option defaultValue='' disabled> </option>
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
              <div className='col s6'>
                <label className='left'> Skill Level </label>
                <select ref='skill_level' required>
                  <option disabled selected></option>
                  <option value='Open'> Open </option>
                  <option value='AA'> AA </option>
                  <option value='A'> A </option>
                  <option value='B'> B </option>
                  <option value='Novice'> Novice </option>
                  <option value='Everyone'> Everyone </option>
                </select>
              </div>

              <div className='row'>
                <div className='col s12'>
                  <label className='left'> Description </label>
                  <textarea placeholder='Write Description Here' ref='event_description'></textarea>
                </div>
              </div>

              <input type='submit' value='Create Event' className='center btn blue' />
            </div>
          </div>

          </div>
        </form>
      </div>
    );
  }
}

export default AddEvent;
