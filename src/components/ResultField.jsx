import React from 'react';

var ResultField = React.createClass({
  getInitialState: function() {
    return {result: ""}
  },
  render: function(){
    return (
      <input className="form-control" placeholder="Result" value={this.state.result}></input>
    );
  }
});

module.exports = ResultField;
