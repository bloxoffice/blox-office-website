import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from 'components/Header';

import { DashboardSelector } from './Dashboard.redux';
import './Dashboard.style.scss';

const transactions = [{
  id: 1,
  from: '0x345a465c753d764b563a64c6464c348b74',
  amount: '0.004',
  date: '12-06-2016',
  status: 'success',
}, {
  id: 2,
  from: '0x345a465c753d764b563a64c6464c348b74',
  amount: '0.004',
  date: '12-06-2016',
  status: 'pending',
}, {
  id: 3,
  from: '0x345a465c753d764b563a64c6464c348b74',
  amount: '0.004',
  date: '12-06-2016',
  status: 'success',
}];

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard-container">
        <Header
          handleElScroll={this.handleElScroll}
        />
        <div className="bbtc-details-container">
          <div className="bbtc-value-container">
            <div className="bbtc-value-inner1">
              <p className="dollar-desc">
                <span className="dollar-label">BBTC</span>
                <span className="dollar-val">100</span>
              </p>
            </div>
            <div className="bbtc-value-inner2">
              <p className="dollar-desc1">
                <span>USD</span>
                <span className="dollar-val1">10$</span>
              </p>
              <p className="dollar-desc1">
                <span>ETH</span>
                <span className="dollar-val1">0.002</span>
              </p>
            </div>
          </div>
          <div className="bbtc-ether-details-container">
            <p className="bbtc-transfer-label">
              To purchase BBTC transfer Ether to
            </p>
            <p className="bbtc-transfer-code">
              0x345a465c753d764b563a64c6464c348b74
            </p>
          </div>
        </div>
        <p className="transaction-history-header">transaction history</p>
        <div className="transactions-table-container">
          <table className="transactions-table">
            <thead>
              <tr className="transaction-header-row">
                <th>From Ether Address</th>
                <th>Amount (ETH)</th>
                <th>DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="transaction-row">
                  <td>{transaction.from}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                  <td>
                    {transaction.status === 'success' && (
                      <i className="fa fa-check" style={{ color: '#7ed321' }} />
                    )}
                    {transaction.status === 'pending' && (
                      <span className="pending-msg">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {};

const mapDispatchToProps = {};

export default connect(DashboardSelector, mapDispatchToProps)(Dashboard);
