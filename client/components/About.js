import React, { Component } from 'react';

class About extends Component {

  render() {
    return(
      <div>
        <div className='row'>
          <div className='col s3'>
            <div className='spencer'> </div>
            <hr />
            <p className='center'><em> Ginger </em></p>
          </div>
          <div className='col s3'>
            <div className='alex'> </div>
            <hr />
            <p className='center'><em> Asian Samaurai </em> </p>
          </div>
          <div className='col s3'>
            <div className='william'> </div>
            <hr />
            <p className='center'><em> Huge Beard, Tatted Dog Lover </em></p>
          </div>
          <div className='col s3'>
            <div className='rebecca'> </div>
            <hr />
            <p className='center'><em> </em></p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
