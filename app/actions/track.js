import * as actionTypes from '../constants/actionTypes';

export default function setTracks(tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks,
  };
}
