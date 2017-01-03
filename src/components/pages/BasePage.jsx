var React = require('react');
var NavBar = require('../nav/NavBar.jsx');

var navLinks = [{title: "calculator", href: "/calculator"},
  {title: "uport", href: "/"},
  {title: "web3", href: "/web3"},
  {title: "products", href: "/product"}];

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
