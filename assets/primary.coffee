app = angular.module 'store', []

app.controller 'StoreController', ->
  @products = gems
  return

app.controller 'PanelController', ->
  @tab = 1

  @isSelected = (checkTab)->
    @tab == checkTab
  @selectTab = (setTab)->
    @tab = setTab
  return

app.controller 'ReviewController', ->
  @review = {}

  @addReview = (product)->
    product.reviews.push(@review)
    @review = {}
    return
  return

app.directive 'productTitle', ->
  {
    restrict: 'E'
    templateUrl: 'product-title.html'
  }

app.directive 'reviewBlock', ->
  {
    restrict: 'E',
    templateUrl: 'review-block.html'
  }

app.directive 'tabsBlock', ->
  {
    restrict: 'E'
    templateUrl: 'tabs-block.html'
  }

gems = [
  {
    name: 'Dodechedron'
    price: 2.95
    description: '....'
    images: [
      full: 'assets/img/gem-03.gif'
      thumb: 'assets/img/gem-03.gif'
    ]
    reviews: [
      {
        stars: 5
        body: 'I love this product!'
        author: 'joe@thomas.com'
      },
      {
        stars: 1
        body: 'This product sucks'
        author: 'tim@hater.com'
      }
    ]
  },
  {
    name: 'Pentagonal Gem'
    price: 5.95
    description: '....'
    images: [
      full: 'assets/img/gem-01.gif'
      thumb: 'assets/img/gem-01.gif'
    ]
  }
]
