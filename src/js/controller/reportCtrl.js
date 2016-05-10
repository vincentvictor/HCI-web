angular.module('todoApp')
    .controller('ReportController', function($http, enrollment_service, $window) {
        var self = this;
        self.studentID = enrollment_service.studentID;
        self.regisType_list = enrollment_service.regisType_list;
        self.credit_list = [];

		  $http.get('http://52.37.98.127:3000/v1/5610545684?pin=5684')
        .success(function(response){
          console.log("DB " + response);
          self.enroll_list = response.mycourse;
          self.section_list = response.mysection;
          self.regisType_list = response.myRegisType;
          for (val of self.enroll_list){
              self.credit_list.push(val.credit.total);
          }
          console.log(self.credit_list)

      });

        self.viewJSON = function() {
        	console.log("post");
        	$window.open('http://52.37.98.127:3000/v1/5610545684?pin=5684', '_blank');
        }
    });







