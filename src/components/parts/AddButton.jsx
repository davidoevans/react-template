import React from 'react';

var AddButton = React.createClass( {
  render: function() {
    return (
      <div className="col-xs-3">
        <button className="btn btn-success btn-raised" onClick={this.props.onClick}>+ Add</button>
      </div>
    )
  }
});

module.exports = AddButton;
