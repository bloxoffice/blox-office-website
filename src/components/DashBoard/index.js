import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard.scss';

class DashBoard extends Component {
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
    const rows = [{"firstName":"Francisco","lastName":"Brekke","state":"NY","transaction":{"amount":"399.73","date":"2012-02-02T08:00:00.000Z","business":"Kozey-Moore","name":"Checking Account 2297","type":"deposit","account":"82741327"}},
                {"firstName":"Francisco","lastName":"Brekke","state":"NY","transaction":{"amount":"768.84","date":"2012-02-02T08:00:00.000Z","business":"Herman-Langworth","name":"Money Market Account 9344","type":"deposit","account":"95753704"}}
              ];
    const dataHeadr =[{"headers": {"header1":"Address","header2":"Amount","header3":"Date","header4":"Status"}}];
    //const data =[{"record":{"adrs123","$123","12-02-18","Success"}},
    //             {"record":{"address223","$223","22-02-18","Pending"}}];
    const listItemsHdr = dataHeadr.map((d) => <li className="dataHdrCls" key={d.headers}>
      <div className="row">
        <div className="col-sm-3">
          {d.headers.header1}
        </div>
        <div className="col-sm-1">
          {d.headers.header2}
        </div>
        <div className="col-sm-2">
          {d.headers.header3}
        </div>
        <div className="col-sm-1">
          {d.headers.header4}
        </div>
      </div>
    </li>);
    //const listItems = data.map((d) => <li className="dataCls" key={d.record}>{d.record}</li>);
    const listItems1 = rows.map((d) => <li className="dataCls" key={d.firstName}>
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
      <div className="container-fluid dbStyle">
        <div className="row col hdrSpace">
          <div className="row col-md-4 bglft">
            <div className="col-md-6 bg1">
              <span className="BBTC">BBTC </span> <span className="layer1">100</span>
            </div>
            <div className="col-md-6 bg2">
              <span className="USD">USD </span><span className="layer">10$</span><br /><br />
              <span className="ETH">ETH </span><span className="layer">0.002</span>
            </div>
          </div>
          <div className="row col-md-1">
          </div>
          <div className="row col-md-6 bgrt">
            <div className="col">
              <div className="row">
                <span className="To-purchase-BBTC-tra">To purchase BBTC transfer Ether to</span>
              </div><br />
              <div className="row">
                <span className="x345a465c753d764b56">0x345a465c753d764b563a64c6464c348b74</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row col thTable">
          <div className="container-fluid">
            <div className="transHst">
            <span><h3> Transaction History </h3></span><br />
            </div>
            <div className="">
              {listItemsHdr }
            </div>
            <div className="">
              {listItems1 }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DashBoard.defaultProps = {};

DashBoard.propTypes = {};

export default DashBoard;
