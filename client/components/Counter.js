import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.incrementCount = this.incrementCount.bind(this);
    this.gameOpen = this.gameOpen.bind(this);
    this.gameClosed = this.gameClosed.bind(this);
}

  incrementCount(){
    if (this.state.count === this.props.capacity) {
    } else {
      this.setState({
        count: this.state.count + 1
      });
    }
 }
 gameOpen() {
   return(
   <div className='row'>
      <div className='box'>
        <div className='col s12'>
          <label htmlFor='capacity'>Attending</label>
          <h1>{this.state.count}</h1>
          <button className="btn" onClick={this.incrementCount}>Join</button>
        </div>
      </div>
    </div>
)}

  gameClosed() {
    return(
    <div className='row'>
      <div className='box'>
        <div className='col s12'>
         <label htmlFor='capacity'>Full</label>
         <h1>{this.state.count}</h1>
         <button className="btn-flat disabled">Full</button>
       </div>
    </div>
    </div>
  )}

render() {
  if (this.state.count != this.props.capacity) {
    return(this.gameOpen());
  }else{
    return(this.gameClosed());
  }
}
}
export default Counter;
