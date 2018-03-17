import React, { Component } from 'react';
import './Security.scss';
import barcode from 'assets/barcode-tag.png';

class Security extends Component {
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
    const rows = [{"userId":"123","firstName":"Francisco","lastName":"Brekke","state":"NY","transaction":{"amount":"399.73","date":"2012-02-02T08:00:00.000Z","business":"Kozey-Moore","name":"Checking Account 2297","type":"deposit","account":"82741327"}}];
    const listItems1 = rows.map((d) => <li className="dataCls" key={d.userId}>
    <div className="row">
      <div className="col-sm-3">
        {d.transaction.name}
      </div>
      <div className="col-sm-1">
        {d.transaction.amount}
      </div>
      <div className="col-sm-2">
        '2018-02-12'
      </div>
      <div className="col-sm-1">
        {d.transaction.type}
      </div>
    </div>
    </li>);

    return (
      <div className="container-fluid lgpStyle">
        <form onSubmit={this.handleSubmit}>
          <div className="row usrCls">
            <div className="col-md-10 col-sm-8">
              <div className="row usrDivCls-">
                <div className="col-md-4 chngPwdCls">
                  <label className="Change-Password">
                    Change Password
                  </label>
                </div>
                <div className="col-md-4">
                  <label className="Old-Password">
                    Old Password
                  </label><br />
                  <div className="podCls">
                    <input className="Rectangle-207-Copy-5" type="text" value={this.state.value} onChange={this.handleChange} />
                  </div>
                </div>
              </div>
              <div className="row usrDivCls-">
                <div className="col-md-4">
                  <label className="New-Password">
                  New Password
                  </label><br />
                  <div className="podCls">
                    <input className="Rectangle-input-box" type="text" value={this.state.value} onChange={this.handleChange} />
                  </div>
                </div>
                <div className="hdrSpace">

                </div>
                <div className="col-md-4">
                  <label className="Confirm-Password">
                  Confirm Password
                  </label><br />
                  <div className="podCls">
                    <input className="Rectangle-input-box" type="text" value={this.state.value} onChange={this.handleChange} /><br />
                    <lable className="Password-is-not-matc">Password is not matching</lable>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row col-md-12 usrDivCls-">
            <div>
              <label className="Enable-Two-factor-au">
                Enable Two factor authentication
              </label>
            </div>
            <div className="col-md-12 usrDivCls-">
              <img src={barcode} className="Bitmap2fctrAuth"/>
            </div>
            <button type="submit" className="btn_bg_sbmt" onClick={this.handleFormSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

Security.defaultProps = {};

Security.propTypes = {};

export default Security;
