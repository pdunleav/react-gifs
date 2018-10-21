import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [{ id: "5tHu9qbWUymE8" }, { id: "IcLlPIp9j3x9m" }],
      selectedGif: "5tHu9qbWUymE8"
    };

    this.search("coding");
  }

  search = (query) => {
    giphy('5sEzBU640RflzJxYcs1Fonw4lM4mDqLJ').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  changeSelectedGif = (id) => {
    this.setState({ selectedGif: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
