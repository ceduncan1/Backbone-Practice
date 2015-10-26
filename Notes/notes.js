Tim walkthrough

import Backbone from 'backbone';

let MenuItem = Backbone.Model.extend({
});

window.Menu = Backbone.Collection.extend({
  url: '#source'
  model: MenuItem,
  parse: function(response){
    return response appetizers;}
});

