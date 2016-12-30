import React from 'react';
import LHSField from './LHSField.jsx';
import RHSField from './RHSField.jsx';
import AddButton from './AddButton.jsx';

var Calculator = React.createClass({
  getInitialState: function() {
    return {result: ""};
  },
  handleClick:function(val, e){
    console.log("lhs: " + this.refs.fieldLHS.state.val);
    console.log("rhs: " + this.refs.fieldRHS.state.val);

    var numbers = /^[0-9]+$/;

    if (this.refs.fieldLHS.state.val.match(numbers) || this.refs.fieldRHS.state.val.match(numbers)) {
      this.setState({result: parseFloat(this.refs.fieldLHS.state.val) + parseFloat(this.refs.fieldRHS.state.val)})
    }
	},
  render: function() {
    var divStyle = {
      marginTop: 10
    }

    return (
      <div style={divStyle} className="row">
        <div className="panel panel-primary">
          <div className="panel-heading text-center">
              <h3>Simple calculator</h3>
          </div>
          <div className="panel-body">
              <div className="row">
                <div className="col-sm-6">
                  <LHSField ref="fieldLHS"/>
                </div>
                <div className="col-sm-6">
                  <RHSField ref="fieldRHS"/>
                </div>
              </div>
              <br />
              <input className="form-control" placeholder="Result" value={this.state.result}></input>
              <div className="row">
                <div className="col-sm-3">
                  <AddButton onClick={this.handleClick} value={this.state.value} />
                </div>
              </div>
        </div>
        </div>
      </div>
    );
  }
});

module.exports = Calculator;
