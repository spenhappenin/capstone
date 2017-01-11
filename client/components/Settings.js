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
        <h1 className='center big' style={{color: '#26c5f0'}}> Settings </h1>
        <br />
        <hr className='got-game' />
        <h4 className='small center'> Coming Soon! </h4>
        <hr className='got-game' />
      </div>
    );
  }
}

export default Settings;
