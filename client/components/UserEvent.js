import React, { Component } from 'react';

class UserEvent extends Component {

  render() {
    let sportEvent = this.props.userEvent;
    return(
      <div className='container'>
        <div>
          <div className="col s12 m12">
            <h5 className="header">{ sportEvent.name }</h5>
            <div className="card event-card horizontal">
              <div className="card-image">
                <img src="http://lorempixel.com/100/190/nature/6" />
              </div>
              <div className="card-stacked">
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
