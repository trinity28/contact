angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/contact', {
            templateUrl: 'views/home.html',
            controller: 'AppController'
        })

        // nerds page that will use the NerdController
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'AuthenticationController'
        });

    $locationProvider.html5Mode(true);

}]);