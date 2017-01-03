import React from 'react';
import Web3 from 'web3';

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var EthBrowser = React.createClass({
  render: function() {
    return (
      <h1>web3 version: {web3.version.api}</h1>

    );
  }
});

module.exports = EthBrowser;
