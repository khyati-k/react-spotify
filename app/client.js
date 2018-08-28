import React from 'react';
import ReactDOM from 'react-dom';

import Stream from './components/Stream';
import configStore from './store/configStore';
import * as actions from './actions';

const tracks = [{ title: 'a' }, { title: 'b' }];

const store = configStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(<Stream />, root);
