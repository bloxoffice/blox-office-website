import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './Timer.scss';

const getTimeDiff = (tillDate) => {
  const millisecondMap = {
    sec: 1000,
    min: 1000 * 60,
    hour: 1000 * 60 * 60,
    days: 1000 * 60 * 60 * 24,
  };

  let millisecDiff = Math.abs(moment().diff(new Date(tillDate)));

  const diffMap = {};
  diffMap.days = Math.floor(millisecDiff / millisecondMap.days);
  millisecDiff -= Number(diffMap.days) * millisecondMap.days;

  diffMap.hours = Math.floor(millisecDiff / millisecondMap.hour);
  millisecDiff -= Number(diffMap.hours) * millisecondMap.hour;

  diffMap.mins = Math.floor(millisecDiff / millisecondMap.min);
  millisecDiff -= Number(diffMap.mins) * millisecondMap.min;

  diffMap.secs = Math.floor(millisecDiff / millisecondMap.sec);

  return diffMap;
};

export default class Timer extends React.Component {
  constructor(props) {
    super();

    this.state = {
      timer: null,
      timeDiff: getTimeDiff(props.date),
    };
  }

  componentDidMount() {
    this.state.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick = () => {
    this.setState({
      timeDiff: getTimeDiff(this.props.date),
    });
  };

  render() {
    const { timeDiff } = this.state;
    return (
      <div>
        <p className="timer-string">
          {`${(`0${timeDiff.days}`).slice(-2)}:${(`0${timeDiff.hours}`).slice(-2)}:${(`0${timeDiff.mins}`).slice(-2)}:${(`0${timeDiff.secs}`).slice(-2)}`}
        </p>
        <p className="timer-labels">
          <span className="days-label">DAYS</span>
          <span className="hours-label">HOURS</span>
          <span className="mins-label">MIN</span>
          <span className="secs-label">SEC</span>
        </p>
      </div>
    );
  }
}

Timer.propTypes = {
  date: PropTypes.string.isRequired,
};
