import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('body').css('background-image', "url(https://res.cloudinary.com/omash612/image/upload/c_scale,w_1978/v1483472712/hdSoccerGame_jwonev.jpg)");
    $('body').css('background-size', 'cover');
    $('body').css('background-position', '100% 70%');
    $('body').css('background-repeat', 'no-repeat');
    $('body').css('height', '100vh');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.refs.contactForm.reset();
    Materialize.toast('Thank you for reaching out to us! We will get back to you shortly!', 6000, 'toasted');
  }

  render() {
    return(
      <div>
        <div className='row' style={{marginTop: '60px', marginLeft: '15px'}}>
          <div className='col s4' style={{backgroundColor: 'rgba(186, 186, 186, 0.2)', borderRadius: '10px'}}>
            <form onSubmit={this.handleSubmit} ref='contactForm'>
              <h2 className='white-text'> Contact Us </h2>
              <div className='row'>
                <div className='col s12'>
                  <label className='left white-text'> Name </label>
                  <input type='text' placeholder='John Doe' className='name-box white-text' required />
                </div>
              </div>
              <div className='row'>
                <div className='col s12'>
                  <label className='left white-text'> Email </label>
                  <input type='email' placeholder='test@test.com' className='email-box white-text' required />
                </div>
              </div>
              <div className='row'>
                <div className='col s12'>
                  <label className='left white-text'> Message </label>
                  <textarea className='white-text' placeholder='Write Message Here...'></textarea>
                </div>
              </div>
              <div className='row'>
                <div className='col s12'>
                  <input type='submit' className='btn blue right' value='Send' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
