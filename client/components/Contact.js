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
        <div className='contact-background'>
          <div className='row'>
            <div className='col s4'>
              <h2 className='white-text'> Contact Us </h2>
            </div>
          </div>
            <form onSubmit={this.handleSubmit}>
              <div className='row'>
                <div className='col s4'>
                  <label className='left white-text'> Name </label>
                  <input type='text' placeholder='John Doe' className='name-box white-text' required />
                </div>
              </div>
              <div className='row'>
                <div className='col s4'>
                  <label className='left white-text'> Email </label>
                  <input type='email' placeholder='test@test.com' className='email-box white-text' required />
                </div>
              </div>
              <div className='row'>
                <div className='col s4'>
                  <label className='left white-text'> Message </label>
                  <textarea className='message-box white-text' placeholder='Write Message Here...'></textarea>
                </div>
              </div>
              <div className='row'>
                <div className='col s4'>
                  <input type='submit' className='btn blue right' value='Send' />
                </div>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default Contact;
