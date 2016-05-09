angular.module('todoApp')
    .controller('ReportController', function($http, enrollment_service, $window) {
        var self = this;

		$http.get('http://52.37.98.127:3000/v1/5610545684?pin=5684')
        .success(function(response){
          console.log("DB " + response);
          self.enroll_list = response.mycourse;
          self.section_list = response.mysection;
        });

        self.viewJSON = function() {
        	console.log("post");
        	$window.open('http://52.37.98.127:3000/v1/5610545684?pin=5684', '_blank');
        }
    });







