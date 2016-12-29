import React, { Component } from 'react';

class About extends Component {

  render() {
    return(
      <div>
        <div className='about-background'>
          <div className='row'>
            <div className='col s3'>
              <div className='spencer z-depth-5'> </div>
              <hr />
              <p className='center'><em> Ginger </em></p>
            </div>
            <div className='col s3'>
              <div className='alex z-depth-5'> </div>
              <hr />
              <p className='center'><em> Asian Samaurai </em> </p>
            </div>
            <div className='col s3'>
              <div className='william z-depth-5'> </div>
              <hr />
              <p className='center'><em> Huge Beard, Tatted Dog Lover </em></p>
            </div>
            <div className='col s3'>
              <div className='rebecca z-depth-5'> </div>
              <hr />
              <p className='center'><em> Yoga Master Extraordinaire </em></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
