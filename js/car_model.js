import Backbone from 'backbone';
let CarModel = Backbone.Model.extend({
  urlRoot: 'https://api.parse.com/1/classes/cars',
  idAttribute: 'objectId'
});

export default CarModel;