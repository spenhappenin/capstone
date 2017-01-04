import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <div className='row'>
          <div className='col s3 contact-background1'> </div>
          <div className='col s6'>
            <div className='center'>
              <h2> Contact Us </h2>
              <form onSubmit={this.handleSubmit}>
                <div className='row'>
                  <div className='col s6 offset-s3'>
                    <label className='left'> Name </label>
                    <input type='text' placeholder='John Doe' className='name-box' required />
                  </div>
                </div>
                <div className='row'>
                  <div className='col s6 offset-s3'>
                    <label className='left'> Email </label>
                    <input type='email' placeholder='test@test.com' className='email-box' required />
                  </div>
                </div>
                <div className='row'>
                  <div className='col s6 offset-s3'>
                    <label className='left'> Message </label>
                    <textarea className='message-box' placeholder='Write Message Here...'></textarea>
                  </div>
                </div>
                <div className='row'>
                  <div className='col s6 offset-s3'>
                    <input type='submit' className='btn blue right' value='Send' />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col s3 contact-background2'> </div>
        </div>
      </div>
    );
  }
}

export default Contact;
