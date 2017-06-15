
myApp.config(function($routeProvider, $locationProvider) {                        
  $routeProvider                                                                
      
        .when('/signup', {                                            
         templateUrl: "/view/signup.html",                                               
         controller:'AuthenticationController',                                
        })                                                                 
        .otherwise({                      
            template: 'does not exists'   
        });      
});

