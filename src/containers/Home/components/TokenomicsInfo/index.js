import React from 'react';
import PropTypes from 'prop-types';
import { arc } from 'd3';

import coins from 'assets/images/coins.svg';
import './TokenomicsInfo.scss';

const segments = [{
  stat: 'CrowdSale',
  val: 60,
  color: '#ac92ec',
}, {
  stat: 'Team & Development',
  val: 16,
  color: '#a0d468',
}, {
  stat: 'Bounty',
  val: 2,
  color: '#4fc1e9',
}, {
  stat: 'Private Sale',
  val: 7,
  color: '#fc6e51',
}, {
  stat: 'Mentors',
  val: 8,
  color: '#3c63e2',
}, {
  stat: 'Pre-Sale',
  val: 7,
  color: '#9af1ff',
}];

let totalLength = 0;
segments.forEach((segment) => {
  totalLength += segment.val;
});

const arcs = [];
let totalAngle = 0;
const pi = Math.PI;

segments.forEach((segment) => {
  const angle = (segment.val / totalLength) * (2 * pi);
  const d = arc()
    .startAngle(totalAngle)
    .endAngle(totalAngle + angle);
  arcs.push(d);
  totalAngle += angle;
});

const Donut = ({
  segmnts, handleMouseOver, handleMouseLeave, hoveredArc,
}) => (
  <svg width="360px" height="360px" viewBox="0 0 42 42" className="donut">
    <g transform="translate(20, 20)">
      {segmnts.map((segment, i) => (
        <path
          onMouseEnter={() => {
            handleMouseOver(i);
          }}
          onMouseLeave={() => {
            handleMouseLeave(i);
          }}
          onFocus={() => {}}
          key={segment.stat}
          d={hoveredArc === i ? arcs[i].innerRadius('12').outerRadius('18')() : arcs[i].innerRadius('12').outerRadius('15')()}
          fill={segment.color}
        />
      ))}
    </g>
  </svg>
);

Donut.defaultProps = {
  handleMouseOver: () => {},
  handleMouseLeave: () => {},
  hoveredArc: -1,
};

Donut.propTypes = {
  segmnts: PropTypes.arrayOf(PropTypes.shape({
    stat: PropTypes.string.isRequired,
    val: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
  handleMouseOver: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  hoveredArc: PropTypes.number,
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
    this.state = {
      hoveredArc: -1,
    };
  }

  handleMouseOver = (index) => {
    this.setState({
      hoveredArc: index,
    });
  };

  handleMouseLeave = (index) => {
    if (this.state.hoveredArc === index) {
      this.setState({
        hoveredArc: -1,
      });
    }
  };

  render() {
    return (
      <div className="ti-container" ref={(el) => { this.tokenomicsElement = el; }}>
        <div className="ti-content">
          <div className="logo-container">
            <div className="logo-box">
              <img src={coins} alt="coins" className="logo" />
            </div>
            <p className="tokenomics-txt">tokenomics</p>
          </div>
          <div className="donut-container">
            <Donut
              segmnts={segments}
              hoveredArc={this.state.hoveredArc}
              handleMouseOver={this.handleMouseOver}
              handleMouseLeave={this.handleMouseLeave}
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
