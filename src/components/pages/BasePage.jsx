var React = require('react');
var NavBar = require('../nav/NavBar.jsx');

var navLinks = [{title: "Home", href: "/"}];

var BasePage = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar bgColor="#FFF" titleColor="#30971d1" navData={navLinks} />
        {this.props.children}
      </div>
    );
  }
});

module.exports = BasePage;
