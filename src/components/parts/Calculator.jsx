import React from 'react';
import LHSField from './LHSField.jsx';
import RHSField from './RHSField.jsx';
import AddButton from './AddButton.jsx';
import ResultField from './ResultField.jsx';

var Calculator = React.createClass({
  getInitialState: function() {
    return {value: ""};
  },
  onClick:function(val, e){
    console.log("onclick: " + val);
		/*
    var val1=this.state.value;
		val1=val1+val;
		this.setState({value:val1});
    */
    var numbers = /^[0-9]+$/;

    if (!val.match(numbers)) {
      this.setState({valid: false, lhs: val});
    } else {
      this.setState({valid: true, lhs: val});
    }
    console.log("lhs after: " + this.state.lhs);
	},
  onEvaluate: function() {
    /* var val=this.state.lhs; */
    console.log("val: " + this.state.value);

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
                  <LHSField />
                </div>
                <div className="col-sm-6">
                  <RHSField />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-3">
                  <AddButton onClick={this.onClick.bind(this, "1")} value={this.state.value} />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-9">
                  <ResultField />
                </div>
                <div className="col-sm-3">
                  <AddButton onClick={this.onEvaluate} />
                </div>
              </div>
        </div>
        </div>
      </div>
    );
  }
});

module.exports = Calculator;
