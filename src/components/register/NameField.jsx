import React from 'react';

var NameField = React.createClass({
  getInitialState: function() {
    return {name: ""};
  },
  handleChange: function(e) {
    this.setState({name: e.target.value});
  },
  render: function() {
    return (
      <input className="form-control"
        onChange={this.handleChange}
        value={this.state.name}
        placeholder={this.props.type + "Name"} />
    );
  }
});

module.exports = NameField;
