import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src="data:image/jpeg;base64,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" alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );     
}

export default Body;
