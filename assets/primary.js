// Generated by CoffeeScript 1.8.0
(function() {
  var app, gems;

  app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
    this.selectTab = function(setTab) {
      return this.tab = setTab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('reviewSelect', function() {
    return {
      restrict: 'E',
      tempateUrl: 'review-select.html'
    };
  });

  gems = [
    {
      name: 'Dodechedron',
      price: 2.95,
      description: '....',
      images: [
        {
          full: 'assets/img/gem-03.gif',
          thumb: 'assets/img/gem-03.gif'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: 'I love this product!',
          author: 'joe@thomas.com'
        }, {
          stars: 1,
          body: 'This product sucks',
          author: 'tim@hater.com'
        }
      ]
    }, {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '....',
      images: [
        {
          full: 'assets/img/gem-01.gif',
          thumb: 'assets/img/gem-01.gif'
        }
      ]
    }
  ];

}).call(this);
