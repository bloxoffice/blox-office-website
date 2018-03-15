import React from 'react';
import PropTypes from 'prop-types';

import coins from 'assets/images/coins.png';

import './TokenomicsInfo.scss';

const segments = [{
  stat: 'Circulation',
  val: 67,
  color: '#ac92ec',
}, {
  stat: 'Team & Development',
  val: 20,
  color: '#a0d468',
}, {
  stat: 'Bounty',
  val: 2,
  color: '#4fc1e9',
}, {
  stat: 'Private Sale',
  val: 3,
  color: '#fc6e51',
}, {
  stat: 'Mentors',
  val: 8,
  color: '#3c63e2',
}];

let totalLength = 0;
segments.forEach((segment, i) => {
  const dashoffset = (100 - totalLength) + 25;
  totalLength += segment.val;
  segments[i].dashoffset = i === 0 ? 25 : dashoffset;
});

const Donut = ({ segmnts }) => (
  <svg width="260px" height="260px" viewBox="0 0 42 42" className="donut">
    <circle cx="21" cy="21" r="15.91549430918954" fill="#fcfcfc" className="donut-hole" />
    {segmnts.map((segment, i) => (
      <circle
        key={segment.stat}
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        strokeWidth={3}
        stroke={segment.color}
        strokeDasharray={i === 0 ? '100 0' : `${segment.val} ${(100 - segment.val)}`}
        strokeDashoffset={segment.dashoffset}
      />
    ))}
  </svg>
);

Donut.propTypes = {
  segmnts: PropTypes.arrayOf(PropTypes.shape({
    stat: PropTypes.string.isRequired,
    val: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    dashoffset: PropTypes.number.isRequired,
  })).isRequired,
};

const StatItem = ({ color, stat, val }) => (
  <div className="stat-item-container">
    <div style={{ paddingTop: 5 }}>
      <div className="dot" style={{ backgroundColor: color }} />
    </div>
    <div className="stat">{stat}</div>
    <div className="val">{`${val}%`}</div>
  </div>
);

StatItem.propTypes = {
  color: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired,
};

class TokenomicsInfo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="ti-container" ref={(el) => { this.tokenomicsElement = el; }}>
        <div className="ti-content">
          <div className="logo-container">
            <img src={coins} alt="coins" className="logo" />
            <p className="tokenomics-txt">tokenomics</p>
          </div>
          <div className="donut-container">
            <Donut
              segmnts={segments}
            />
          </div>
          <div className="stats-container">
            {segments.map((segment) => (
              <StatItem
                key={segment.stat}
                color={segment.color}
                stat={segment.stat}
                val={segment.val}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

TokenomicsInfo.defaultProps = {};

TokenomicsInfo.propTypes = {};

export default TokenomicsInfo;
