import { TRACKS_SET } from '../constants/actionTypes';

const initialState = [];

function setTracks(state, action) {
  const { tracks } = action;
  return [...state, ...tracks];
}
export default function (state = initialState, action) {
  switch (action.type) {
    case TRACKS_SET:
      return setTracks(state, action);
  }
  return state;
}

