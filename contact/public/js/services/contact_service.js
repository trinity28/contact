angular.module('ContactService', []).factory('Contact', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/contacts');
        },

                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/contacts', nerdData);
        },
        update : function(id) {
            return $http.put('/contacts' + id);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/contacts' + id);
        }
    }       

}]);
