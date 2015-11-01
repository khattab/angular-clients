var Khattabovic = angular.module('Khattabovic', [
  'ngRoute',
  'artistControllers'
]);

Khattabovic.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
  
}]);