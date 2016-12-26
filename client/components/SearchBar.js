import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userEvent: ''
    }
  }

  handleSearch (e) {
    this.setState({ userEvent: e.target.value })
  }

  handleSubmit(e) {
  e.preventDefault();

  this.props.dispatch(fetchUserEvents);
}

  render () {
    return (
      <div className='container center'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Event Name'
            onChange={this.handleSearch.bind(this)}
            value={this.state.userEvent} />
          <button className='btn blue' type='submit' onClick={this.handleSubmit}>
            Search
          </button>
        </form>
      </div>
    )
  }
}

export default SearchBar
