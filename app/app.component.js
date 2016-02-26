import 'es6-shim';
import 'reflect-metadata';
import * as ng from 'angular2/core'

module.exports = ng.Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>'
}).Class({
  constructor: function() {}
});