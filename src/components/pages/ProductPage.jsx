import React from 'react';
import ReactDOM from 'react-dom';
var Link = ReactDOM.Link;

var ProductPage = React.createClass({
  getInitialState: function() {
    return {pid: ""};
  },
  componentDidMount: function() {
    this.setState({pid: "this.props.params.productId"});
  },
  render: function() {
    return (
      <div>
        <h1>Hi, I'm product number {this.props.params.productId}</h1>
      </div>

    );
  }
});

module.exports = ProductPage;
