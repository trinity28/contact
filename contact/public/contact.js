var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


var refresh = function() {
  $http.get('/contacts').success(function(response) {
    console.log("I got the data I requested");
    $scope.contactlist = response;
    $scope.contact = "";
  });
};

refresh();

$scope.addContact = function() {
  console.log($scope.contact);
  $http.post('/contacts', $scope.contact).success(function(response) {
    console.log(response);
     $scope.contactlist = response;
    $scope.contact = "";
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/contacts/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/contacts/' + id).success(function(response) {
    $scope.contact = response;
  });
};  

$scope.update = function() {
  console.log($scope.contact._id);
  $http.put('/contacts/' + $scope.contact._id, $scope.contact).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.contact = "";
}

}]);﻿



myApp.config(function($routeProvider, $locationProvider) {                        
  $routeProvider                                                                
       .when('/', {                                            
         templateUrl: "index.html",                                               
         controller:'AppCtrl',                                
        })
        .when('/signup', {                                            
         templateUrl: "/view/signup.html",                                               
         controller:'AuthenticationController',                                
        })                                                                 
        .otherwise({                      
            template: 'does not exists'   
        });      
});

