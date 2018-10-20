import React, { Component } from 'react';

import Search from './search.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const gifs = [
      { id: "5tHu9qbWUymE8" },
      { id: "IcLlPIp9j3x9m" }
    ];

    return (
      <div>
        <div className="left-scene">
          <Search />
          <div className="selected-gif">
            <Gif id="5tHu9qbWUymE8"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    )
  }
}

export default App;
