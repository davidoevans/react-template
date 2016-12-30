var React = require('react');

var RHSField = React.createClass({
    getInitialState: function() {
      return {valid: true, placeholder: "Number e.g. 2557", val: ""}
    },
    onChange: function(e) {
      console.log("rhs: " + e.target.value);

      var numbers = /^[0-9]+$/;

      if (!e.target.value.match(numbers)) {
        this.setState({valid: false, val: e.target.value});
      } else {
        this.setState({valid: true, val: e.target.value});
      }
    },
    render: function() {
      var formClass = this.state.valid ? "form-group" : "form-group has-error"

      return (
        <div className={formClass}>
          <input className="form-control" onChange={this.onChange} placeholder={this.state.placeholder} value={this.state.value}/>
        </div>
      );
    }
});

module.exports = RHSField;
