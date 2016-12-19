import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container center'>
        <h2> Contact Us </h2>
        <form>
          <input type='text' placeholder='Your Name' className='name-box' required />
          <input type='email' placeholder='test@test.com' className='email-box' required />
          <textarea className='message-box' placeholder='Write Message Here...'></textarea>
          <input type='submit' className='btn blue' value='Send' />
        </form>
      </div>
    );
  }
}

export default Contact;
