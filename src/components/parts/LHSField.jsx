var React = require('react');

var LHSField = React.createClass({
    getInitialState: function() {
      return {valid: true, placeholder: "Number e.g. 1335", lhs: ""}
    },
    onChange: function(e) {
      console.log("lhs: " + e.target.value);

      var numbers = /^[0-9]+$/;

      if (!e.target.value.match(numbers)) {
        this.setState({valid: false, lhs: e.target.value});
      } else {
        this.setState({valid: true, lhs: e.target.value});
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

module.exports = LHSField;
