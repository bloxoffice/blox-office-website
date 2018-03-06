import React from 'react';

import EmbeddedVideo from '../EmbeddedVideo';

import './WhitePaperInfo.scss';

const WhitePaperInfo = () => (
  <div className="whitepaper-info">
    <div className="video-player">
      <EmbeddedVideo
        videoUrl="https://www.youtube.com/watch?v=EKa5Gh9whgU"
      />
    </div>
    <div className="download-player-container">
      <button className="download-btn">
        <span className="download-btn-text">DOWNLOAD THE WHITE PAPER</span>
        <span className="fa fa-caret-down download-btn-icon" />
      </button>
    </div>
  </div>
);

WhitePaperInfo.defaultProps = {};

WhitePaperInfo.propTypes = {};

export default WhitePaperInfo;
