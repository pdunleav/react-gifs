import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} changeSelectedGif={props.changeSelectedGif} />)}
    </div>
  );
}

export default GifList;
