import React, { Component } from 'react';
import { Link } from 'react-router';

// "http://lorempixel.com/100/190/nature/6"

class UserEvent extends Component {

  render() {
    let sportEvent = this.props.userEvent;
    return(
      <div className='container'>
        <div>
          <div className="col s12 m12 event-card">
            <div className="card horizontal">
              <div className="card-image">
                <img src="" />
              </div>
              <div className="card-stacked">
            <h5 className="header">{ sportEvent.name }</h5>
                <div className="card-content">

                  <div className='row'>
                    <div className='col m4'>
                      <i>{ sportEvent.sport }</i>
                    </div>  
                    <div className='col m4'>
                      <i>{ sportEvent.skill_level }</i>
                    </div>
                    <div className='col m4'>
                      <i>0.2 miles </i>
                    </div>  
                      <div>
                      </div> 
                  </div>

                  <div className='row'>
                    <div className='col m4'>
                      <i>{ sportEvent.street }</i>
                    </div>  
                    <div className='col m4'>
                      <i>{ sportEvent.city }</i>
                    </div>
                    <div className='col m4'>
                      <i>{ sportEvent.zip }</i>
                    </div>  
                      <div>
                      </div> 
                  </div>

                  <div className='row'>
                    <div className='col <m12></m12>'>
                      <p>{ sportEvent.description }</p>
                    </div>  
                  </div>

                  <div className='row'>
                    <div className='col m4'>
                      <i>{ sportEvent.date }</i>
                    </div>  
                    <div className='col m4'>
                      <i>{ sportEvent.time }</i>
                    </div>
                    <div className='col m4'>
                      <a href='#show-modal'>Show</a>
                      
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default UserEvent;
