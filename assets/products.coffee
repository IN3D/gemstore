app = angular.module 'store-products', []

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

app.directive 'productPanels', ->
  {
    restrict: 'E'
    templateUrl: 'product-panels.html'
    controller: ->
      @tab = 1
      @isSelected = (checkTab)->
        @tab == checkTab
      @selectTab = (setTab)->
        @tab = setTab
    controllerAs: 'panel'
  }
