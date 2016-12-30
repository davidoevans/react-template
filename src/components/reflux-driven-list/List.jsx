import React from 'react';
import ListItem from './ListItem.jsx';
import Reflux from 'reflux';
import Actions from '../../reflux/actions.jsx'
import IngredientStore from '../../reflux/ingredients-store.jsx';

var List = React.createClass({
  mixins:[Reflux.listenTo(IngredientStore, 'onChange')],
  getInitialState: function() {
    return {ingredients: [], newText: ""};
  },
  componentWillMount: function() {
    Actions.getIngredients();
  },
  onChange: function(event, ingredients) {
    this.setState({ingredients: ingredients});
  },
  onInputChange: function(e) {
    this.setState({newText: e.target.value});
  },
  onClick: function(e) {
    // do something if newText is not empty
    if (this.state.newText) {
      Actions.postIngredients(this.state.newText);
    }

    this.setState({newText: ""});
  },
  render: function() {
    var listItems = this.state.ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (
      <div>
        <input placeholder="Add Item" value={this.state.newText} onChange={this.onInputChange} />
        <button onClick={this.onClick}>Add Item</button>
        <ul>{listItems}</ul>
      </div>
    )
  }
});

module.exports = List;
