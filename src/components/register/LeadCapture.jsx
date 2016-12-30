import React from 'react';
import EmailField from './EmailField';
import NameField from './NameField';

var LeadCapture = React.createClass({
  handleSubmit: function(e) {
    if (!this.refs.fieldEmail.state.valid) {
      alert('Invalid email format');
    } else {
      var httpRequestBody = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.fieldName.state.value
      };
    }
  },
  render: function() {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField type="First" ref="fieldName"/>
            <EmailField ref="fieldEmail"/>
            <button className="btn btn-primary"
              onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
