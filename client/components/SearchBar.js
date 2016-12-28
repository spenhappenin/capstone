import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { userEvent: '' }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
            ref='search'
            placeholder='Event Name'
            onChange={this.handleSearch.bind(this)}
            value={this.state.userEvent} />
          <input type='submit' value='search' placeholder='Search Events' className='btn blue' />
        </form>
      </div>
    )
  }
}

export default SearchBar
