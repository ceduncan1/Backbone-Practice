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

function renderCars() {
  let $ul = $('<ul></ul>');
  cars.each(function(car){
    let data = car.toJSON();
    console.log('data', data);
    let templateString = CarTemplate(data);
    console.log('templateString', templateString);
    let $li = $(templateString);
    $ul.append($li);
  });
  $('.repCont').html($ul);
}

cars.fetch().then(renderCars);


console.log('Hello, World');
