var React = require('react');

var ProductPage = React.createClass({
  getInitialState: function() {
    return {pid: ""};
  },
  componentDidMount: function() {
    this.setState("pid: this.props.params.productId")
  },
  render: function() {
    return (
      <h1>Hi, I'm product number {this.props.params.productId}</h1>
    );
  }
});

module.exports = ProductPage;
