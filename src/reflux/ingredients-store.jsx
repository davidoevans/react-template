var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var IngredientStore = Reflux.createStore({
  listenables: [Actions],
  getIngredients: function() {
    HTTP.get('/ingredients').then(function(data) {
      this.ingredients = data;
      this.fireUpdate();
    }.bind(this));
  },
  postIngredients: function(text) {
    // Posted ingredient to the SERVER
    // now we got a successful callback
    if (!this.ingredients) {
      this.ingredients = [];
    }

    var ingredient = {
      "text": text,
      "id": Math.floor(Date.now() / 1000) + text
    };

    // push locally for UX
    this.ingredients.push(ingredient);
    this.fireUpdate();

    // post to SERVER
    // note using the getIngredients function to get the lastest state of ingredients list
    HTTP.post('/ingredients', ingredient).then(function(response) {
      this.getIngredients();
    }.bind(this));
  },
  // Refresh function
  fireUpdate: function() {
    this.trigger('change', this.ingredients);
  }
});

module.exports = IngredientStore;
