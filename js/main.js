import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';

import CarsCollection from './cars_collection';
import CarTemplate from './car_template';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'N8u4Yx2ldwhjVvQHmTmJ8vybwfjFkzeI9iHlkm2q',
    'X-Parse-REST-API-Key': 'w87J8Fm5OmuQz4ZYWaWT4BFuPrUaR2vzi0MGC1af'
  }
});


let cars = new CarsCollection();

function renderCars(){
  // Creating an empyt dom node
  let $ul = $('<ul></ul>');

  // iterate each of the models
  cars.each(function(car){

    // car is an instance of CarModel

    // grab raw data from car model
    let data = car.toJSON();
    // console.log('data', data);

    // pass the data to our template
    let templateString = CarTemplate(data);
    // console.log('templateString', templateString);

    // use templateString to create an li dom node
    let $li = $(templateString);

    // append li to the ul
    $ul.append($li);

  });

  // set ul to the body
  $('body').html($ul); // .html replaces

}

cars.fetch().then(renderCars);

// console.log('Hello, World');











// import Backbone from 'backbone';

// let Person = Backbone.Model.extend();

// let x = new Backbone.Model();

// let Person = Backbone.Model.extend({
//   save: function() {
//     console.log('this is cool');
//   }
// });

// console.log(x);

// window.personInstance = new Person();