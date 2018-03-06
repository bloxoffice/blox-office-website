import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './EmbeddedVideo.scss';

const getId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/; // eslint-disable-line
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  }

  return 'error';
};

class EmbeddedVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const videoId = getId(this.props.videoUrl);
    return (
      <div className="videoContainer">
        <iframe
          title="videoTitle"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}

EmbeddedVideo.defaultProps = {
  videoUrl: '',
};

EmbeddedVideo.propTypes = {
  videoUrl: PropTypes.string,
};

export default EmbeddedVideo;
