angular.module('UserService', []).factory('User', ['$http', function($http) {

    return {
        // call to get all nerds
        
                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(Data) {
            return $http.post('/signup', Data);
        },
       create: function(Data) {
            return $http.post('/signin' , Data);
        },

        // call to DELETE a nerd
       create: function() {
            return $http.post('/signout' );
        }
    }       

}]);
