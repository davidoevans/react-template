import React from 'react';
import Web3 from 'web3';

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


var EthBrowser = React.createClass({

  render: function() {
    // var listItems = this.state.ingredients.map(function(item) {
    //   return <ListItem key={item.id} ingredient={item.text} />;
    // });
    //
    // var filter = Web3.eth.filter('latest');
    // filter.watch(function(error, result) {
    //   var block = web3.eth.getBlock(result, true);
    //   console.log('block #' + block.number);
    //   console.dir(block.transactions);
    // }

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>eth property</th>
            <th>web3 command</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>web3 version</td>
            <td>web3.version.api</td>
            <td>{web3.version.api}</td>
          </tr>
          <tr>
            <td>web3 node</td>
            <td>web3.version.node</td>
            <td>{web3.version.node}</td>
          </tr>
          <tr>
            <td>web3 block</td>
            <td>web3.eth.blockNumber</td>
            <td>{web3.eth.blockNumber}</td>
          </tr>
          <tr>
            <td>web3 coinbase</td>
            <td>web3.eth.coinbase</td>
            <td>{web3.eth.coinbase}</td>
          </tr>
          <tr>
            <td>web3 balanceAt coinbase</td>
            <td>web3.eth.getBalance(web3.eth.coinbase)</td>
            <td>{web3.toDecimal(web3.eth.getBalance(web3.eth.coinbase))}</td>
          </tr>
        </tbody>
      </table>

    );
  }
});

module.exports = EthBrowser;
