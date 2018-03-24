import React from 'react';

import './Roadmap.scss';

const milestones = [{
  date: 'MARCH- 2018',
  shortDate: 'MAR-2018',
  event: 'PRE-SALE',
}, {
  date: 'APRIL-2018',
  shortDate: 'APR-2018',
  event: 'CROWD SALE',
}, {
  date: 'OCTOBER-2018',
  shortDate: 'OCT-2018',
  event: 'BLOXOFFICE BETA',
}, {
  date: 'NOVEMBER-2018',
  shortDate: 'NOV-2018',
  event: 'BLOXOFFICE GO LIVE',
}, {
  date: 'MARCH-2019',
  shortDate: 'MAR-2019',
  event: 'BLOXOFFICE 2.0',
}];

class Roadmap extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="roadmap">
        <div className="container">
          <h3>ROADMAP</h3>
          <ul className="mapping">
            {milestones.map((milestone, i) => (
              <li key={milestone.event} className={i === 0 ? 'current' : ''}>
                <span className="tag1 hidden-xs">{milestone.date}</span>
                <span className="tag1 visible-xs">{milestone.shortDate}</span>
                <span className="tag2">{milestone.event}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="clearfix" />
      </section>
    );
  }
}

Roadmap.defaultProps = {};

Roadmap.propTypes = {};

export default Roadmap;
