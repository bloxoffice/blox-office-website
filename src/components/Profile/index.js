import React, { Component } from 'react';
import axios from 'axios';
import './Profile.scss';
import bharath from 'assets/images/bharath.jpeg';

class Profile extends Component {
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
            <div className="row col-md-6 col-sm-8">
              <div className="col-md-12 usrDivCls-">
                <label className="usrTxtCls-">
                  First Name
                </label><br />
                <input className="Rectangle-input-box" type="text" value={this.state.value} onChange={this.handleChange} />
              </div>
              <div className="col-md-12 usrDivCls-">
                <label className="usrTxtCls-">
                  Email Address
                </label><br />
                <input className="Rectangle-input-box" type="text" value={this.state.value} onChange={this.handleChange} />
              </div>
              <div className="col-md-12 usrDivCls-">
                <label className="usrTxtCls-">
                  Date Of Birth
                </label><br />
                <input className="Rectangle-input-box" type="text" value={this.state.value} onChange={this.handleChange} />
              </div>
              <div className="col-md-12 usrDivCls-">
                <label className="usrTxtCls-">
                  Address
                </label><br />
                <input className="Rectangle-address" type="text" value={this.state.value} onChange={this.handleChange} />
              </div>
              <div className="col-md-12 usrDivCls-">
                <label className="usrTxtCls-">
                  Zipcode
                </label><br />
                <input className="Rectangle-input-box" type="text" value={this.state.value} onChange={this.handleChange} />
              </div>
              <div className="col-md-12 usrDivCls-">
                <label className="usrTxtCls-">
                  Country
                </label><br />
                <input className="Rectangle-input-box" type="text" value={this.state.value} onChange={this.handleChange} />
              </div>
            </div>
            <div className="row col-md-6 col-sm-8">
              <div className="col-md-12 usrDivCls-">
                <img src={bharath} className="Bitmap"/>
              </div>
              <div className="col-md-12 usrDivCls-">
                <label className="usrTxtCls-">
                  Proof of Address
                </label><br />
                <div className="row">
                  <div className="podCls">
                    <input className="Rectangle-input-box" type="text" value={this.state.value} onChange={this.handleChange} />
                  </div>
                  <div className="">
                    <button type="submit" className="btn_bg" onClick={this.handleUploadPoa}>Upload</button>
                  </div>
                </div>
              </div>
              <div className="col-md-12 usrDivCls-">
                <label className="usrTxtCls-">
                  Proof of Identity
                </label><br />
                <div className="row">
                  <div className="podCls">
                    <input className="Rectangle-input-box" type="text" value={this.state.value} onChange={this.handleChange} />
                  </div>
                  <div className="">
                    <button type="submit" className="btn_bg" onClick={this.handleUploadPoi}>Upload</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row col-md-12 usrDivCls-">
          <button type="submit" className="btn_bg_sbmt" onClick={this.handleFormSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

Profile.defaultProps = {};

Profile.propTypes = {};

export default Profile;
