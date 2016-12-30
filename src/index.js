import React from 'react';
import ReactDOM  from 'react-dom';
import Routes from './Routes.jsx';
import NavBar from './components/nav/NavBar';
import Calculator from './components/calculator/Calculator.jsx';
import List from './components/reflux-driven-list/List.jsx';
import LeadCapture from './components/register/LeadCapture.jsx';

let toRoute = false;

if (toRoute) {
  ReactDOM.render(<Routes /> , document.getElementById('main'));
} else {
  let navLinks = [{title: "Home", href: "/"},{title:"Identity", href: "#"}];
  ReactDOM.render(<NavBar  bgColor="#FFF" titleColor="3097d1" navData={navLinks}/>, document.getElementById('main'));
  ReactDOM.render(<Calculator />, document.getElementById('calculator'));
  ReactDOM.render(<List />, document.getElementById('list'));
  ReactDOM.render(<LeadCapture />, document.getElementById('register'));
}
