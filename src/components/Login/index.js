import React, { Component } from 'react';
import axios from 'axios';
import './Login.scss';
import bharath from 'assets/images/bharath.jpeg';

class Login extends Component {
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
      <div className="container-fluid loginStyle">
        <form>
        <div className="col-md-12 row signUpCls">
          <div className="col-md-6 RectangleSign">
            <div className="RectangleHdr">
              <span className="SignUP">SIGNUP</span>
            </div>
            <div className="signUpInptCls">
              <div className="col-md-12 row">
                <div className="col-md-6 loginCmnStyl">
                  <label className="loginUsr-Name- text-style-1">
                    First Name
                  </label><br />
                  <input className="Rectangle-207-Copy-5" type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="col-md-6 loginCmnStyl">
                  <label className="loginUsr-Name- text-style-1">
                    Last Name
                  </label><br />
                  <input className="Rectangle-207-Copy-5" type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
              </div>
              <div className="col-md-12 row">
                <div className="col-md-6 loginCmnStyl">
                  <label className="loginUsr-Name- text-style-1">
                    Email Address
                  </label><br />
                  <input className="Rectangle-207-Copy-5" type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="col-md-6 loginCmnStyl">
                  <label className="loginUsr-Name- text-style-1">
                    Phone
                  </label><br />
                  <input className="Rectangle-207-Copy-5" type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
              </div>
              <div className="col-md-12 row">
                <div className="col-md-6 loginCmnStyl">
                  <label className="loginUsr-Name- text-style-1">
                    Password
                  </label><br />
                  <input className="Rectangle-207-Copy-5" type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="col-md-6 loginCmnStyl">
                  <label className="loginUsr-Name- text-style-1">
                    Confirm Password
                  </label><br />
                  <input className="Rectangle-207-Copy-5" type="text" value={this.state.value} onChange={this.handleChange} />
                  <lable className="Password-is-not-matc">Password is not matching</lable>
                </div>
              </div>
            </div>
            <div className="col-md-12 row signUptxt">
              <span className="By-clicking-SIGNUP">
                By clicking SIGNUP, you Agree to the Bloxoffice Privacy Policy & Terms & Conditons
              </span>
            </div>
            <div className="col-md-12 row loginSubBtn">
              <button type="submit" className="Rectangle-3-Copy" onClick={this.handleFormSubmit}>
              <span className="signUpp">SIGNUP</span></button>
            </div>
            <div className="col-md-12 row memberLoginBtn">
              <span className="Already-registered">Already registered?</span>
              <a className="Already-registered" href="#"><span className="text-style-1">LOGIN</span></a>
            </div>
          </div>

          <div className="col-md-6 RectangleLogin">
            <div className="RectangleHdr">
              <span className="SignUP">LOGIN</span>
            </div>
            <div className="signUpInptCls">
              <div className="col-md-12">
                <div className="input-group mb-3 loginSgnUpCmnStyl">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                  </div>
                  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="col-md-12 loginSgnUpCmnStyl">
                  <label className="loginUsr-Name- text-style-1">
                    Email Address
                  </label><br />
                  <input className="Rectangle-207-Copy-5" type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="col-md-12 loginSgnUpCmnStyl">
                  <label className="loginUsr-Name- text-style-1">
                    Password
                  </label><br />
                  <input className="Rectangle-207-Copy-5" type="text" value={this.state.value} onChange={this.handleChange} /><br />
                  <a className="Forgot-Passowrd" href="#">Forgot Password?</a>
                </div>
              </div>
              <div className="col-md-12">
                <div className="loginSgnUpCmnStyl row">
                  <input className="Rectangle-2" type="checkbox" value={this.state.value} onChange={this.handleChange} />
                  <span className="loginPgSpace"></span>
                  <lable className="Remember-me">Remember me</lable>
                </div>
              </div>
              <div className="col-md-12 row loginSubBtn">
                <button type="submit" className="Rectangle-3-Copy" onClick={this.handleFormSubmit}>
                <span className="signUpp">SIGNIN</span></button>
              </div>
              <div className="col-md-12 row memberLoginBtn">
                <span className="Already-registered">Dont have an account?</span>
                <a className="Already-registered" href="#"><span className="text-style-1">SIGNUP</span></a>
              </div>
            </div>
          </div>

        </div>
        </form>
      </div>
    );
  }
}

Login.defaultProps = {};

Login.propTypes = {};

export default Login;
