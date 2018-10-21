import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {

  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return <img className="gif" src={src} alt="" />;
  }
}

export default Gif;
