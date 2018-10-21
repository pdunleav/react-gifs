import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  handleUpdate = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return <input type="text" className="form-search form-control" onChange={this.handleUpdate} />;
  }
}

export default Search;
