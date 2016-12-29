import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

var BasePage = require('./components/pages/BasePage.jsx');
var HomePage = require('./components/pages/HomePage.jsx');
var ProductPage = require('./components/pages/ProductPage.jsx');

var Routes = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={BasePage}>
          <IndexRoute component={HomePage} />
          <Route path="/product/:productId" component={ProductPage} />
        </Route>
      </Router>
    )
  }
});

module.exports = Routes;
