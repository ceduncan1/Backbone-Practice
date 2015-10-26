import Backbone from 'backbone';
import CarModel from './car_model';

let CarsCollection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/cars',
  model: CarModel,
  parse: function(data) {
    return data.results;
  }
});

export default CarsCollection;