import React, { Component } from 'react';
import bloxofficeHero from 'assets/images/bloxoffice-hero.png';
import bloxofficeTitle from 'assets/images/bloxoffice-title.png';
import Timer from '../Timer';
import './WhitelistInfo.scss';

class WhitelistInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

handleSubmit = () => {

}

render() {
  return (
    <div className="wli-container">
      <div className="wli-content">
        <div className="wli-logo-container">
          <img src={bloxofficeHero} alt="bloxoffice-Hero" className="bloxoffice-hero" />
        </div>
        <div className="wli-info">
          <img src={bloxofficeTitle} alt="bloxoffice-Title" className="bloxoffice-title" />
          <p className="decentralised-movie">
            Decentralised movie experience
            powered by Blockchain
          </p>
          <div className="email-form ">
            <form menthod="POST">
              <label htmlFor="email">
                <input type={this.state.value} id="email" placeholder="Email address" className="email-input" onChange={this.handleChange} />
              </label>
              <button type="submit" className="whitelist-btn" onClick={this.handleSubmit}>JOIN WHITELIST</button>
            </form>
          </div>
          <div>
            <p className="pre-sales-label">Pre-sales starts in</p>
            <Timer date="04/15/2018 22:00:00" />
          </div>
        </div>
      </div>
    </div>
  );
}
}

WhitelistInfo.defaultProps = {};

WhitelistInfo.propTypes = {};

export default WhitelistInfo;
