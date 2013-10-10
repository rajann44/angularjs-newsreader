var newsReaderApp = angular.module('newsReaderApp', [
    'ngRoute',
    'ngResource',
    'newsReaderControllers',
    'newsReaderServices'
]);

newsReaderApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/headlines.html',
            controller: 'HeadlinesController'
        })
        .when('/headlines', {
            templateUrl: 'views/headlines.html',
            controller: 'HeadlinesController'
        })
        .when('/categories', {
            templateUrl: 'views/categories.html',
            controller: 'CategoriesController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]); 