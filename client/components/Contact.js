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
      <div className='container center'>
        <h2> Contact Us </h2>
        <form onSubmit={this.handleSubmit}>
          <label className='left'> Name </label>
          <input type='text' placeholder='John Doe' className='name-box' required />
          <label className='left'> Email </label>
          <input type='email' placeholder='test@test.com' className='email-box' required />
          <label className='left'> Message </label>
          <textarea className='message-box' placeholder='Write Message Here...'></textarea>
          <input type='submit' className='btn blue' value='Send' />
        </form>
      </div>
    );
  }
}

export default Contact;
