'use strict';

/**
 * @ngdoc overview
 * @name twentyfourtyeightApp
 * @description
 * # twentyfourtyeightApp
 *
 * Main module of the application.
 */
var app = angular
  .module('twentyfourtyeightApp', ['Game']);

  app.controller('GameController', function(GameManager) {
    this.game = GameManager;
  });
