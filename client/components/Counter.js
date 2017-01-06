import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.incrementCount= this.incrementCount.bind(this);
}

  incrementCount(){
    this.setState({
      count: this.state.count + 1
    });
 }

render () {
  return (
 <div className='row'>
   <div className='box'>
     <div className='col s12'>
      <label htmlFor='capacity'>Attending</label>
      <h1>{this.state.count}</h1>
      <button className="btn" onClick={this.incrementCount}>Join</button>
    </div>
 </div>
 </div>
)};
}

export default Counter;
