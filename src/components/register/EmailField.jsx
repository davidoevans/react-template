import React from 'react';
var validator = require('email-validator');

var EmailField = React.createClass({
  getInitialState: function() {
    return {valid: true, email: ""};
  },
  handleChange: function(e) {
    if (!validator.validate(e.target.value)) {
      this.setState({valid: false, email: e.target.value});
    } else {
      this.setState({valid: true, email: e.target.value});
    }
  },
  render: function() {
    var formClass = this.state.valid ? "form-group" : "form-group has-error"

    return (
      <div className={formClass}>
        <input className="form-control" onChange={this.handleChange} value={this.state.email} placeholder="Email"/>
      </div>
    );
  }
});

module.exports = EmailField;
