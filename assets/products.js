// Generated by CoffeeScript 1.8.0
(function() {
  var app;

  app = angular.module('store-products', []);

  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('reviewBlock', function() {
    return {
      restrict: 'E',
      templateUrl: 'review-block.html'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function() {
        this.tab = 1;
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
        return this.selectTab = function(setTab) {
          return this.tab = setTab;
        };
      },
      controllerAs: 'panel'
    };
  });

}).call(this);
