import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('body').css('background-image', '');
    $('body').css('background-color', 'white');
    $('body').css('height', '100vh');
    $('body').css('width', '100%');
  }

  render() {
    return(
      <div>
        <h1 className='center'> PUG Settings </h1>
      </div>
    );
  }
}

export default Settings;
