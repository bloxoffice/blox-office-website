import React from 'react';

import EmbeddedVideo from '../../../../components/EmbeddedVideo/index';

import './WhitePaperInfo.scss';

class WhitePaperInfo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="whitepaper-info" ref={(el) => { this.whitepaperElement = el; }}>
        <div className="video-player">
          <EmbeddedVideo
            videoUrl="https://www.youtube.com/watch?v=uFk7XwSWEcs"
          />
        </div>
        <div className="download-player-container">
          <button
            className="download-btn"
          >
            <a
              className="btn-link-text"
              href="https://s3.amazonaws.com/bloxoffice/bloxoffice_whitepaper.pdf"
              download
            >
              <span className="download-btn-text">DOWNLOAD THE WHITE PAPER</span>
              <span className="fa fa-caret-down download-btn-icon" />
            </a>
          </button>
        </div>
      </div>
    );
  }
}

WhitePaperInfo.defaultProps = {};

WhitePaperInfo.propTypes = {};

export default WhitePaperInfo;
