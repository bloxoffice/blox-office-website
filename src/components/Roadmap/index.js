import React from 'react';

import './Roadmap.scss';

const milestones = [{
  date: 'MARCH- 2018',
  event: 'PRE-SALE',
}, {
  date: 'APRIL-2018',
  event: 'CROWD SALE',
}, {
  date: 'OCTOBER-2018',
  event: 'BLOXOFFICE BETA',
}, {
  date: 'NOVEMBER-2018',
  event: 'BLOXOFFICE GO LIVE',
}, {
  date: 'MARCH-2019',
  event: 'BLOXOFFICE 2.0',
}];

const Roadmap = () => (
  <div className="roadmap-container">
    <h1 className="roadmap-heading">ROADMAP</h1>
    <div className="roadmap-content">
      <svg width="100%" height="80px">
        <line
          x1="10%"
          x2="90%"
          y1="37"
          y2="37"
          stroke="#ffc80a"
          strokeWidth={3}
        />
        {milestones.map((stone, i) => (
          <g key={stone.date}>
            <circle
              cx={`${(i * 20) + 10}%`}
              cy="37px"
              r="15px"
              fill={i === 0 ? '#bf343e' : '#ffc80a'}
            />
            <text x={`${(i * 20) + 10}%`} y="15px" className="stone-text">{stone.date}</text>
            <text x={`${(i * 20) + 10}%`} y="70px" className="stone-text">{stone.event}</text>
          </g>
        ))}
      </svg>
    </div>
  </div>
);

Roadmap.defaultProps = {};

Roadmap.propTypes = {};

export default Roadmap;
