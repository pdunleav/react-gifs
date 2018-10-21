import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    return this.props.changeSelectedGif(this.props.id);
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return <img className="gif" src={src} alt="" onClick={this.handleClick} />;
  }
}

export default Gif;
