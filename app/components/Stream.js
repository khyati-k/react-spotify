import React from 'react';

class Stream extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { tracks = [] } = this.props;
    return tracks.map((track, key) => (
      <div className="track" key={key}>
        {track.title}
        <button onClick={() => this.setState({ [key]: !this.state[key] })}>
          {this.state[key] ? 'Like' : 'DisLike'}
        </button>
      </div>
    ));
  }
}

export default Stream;
