angular.module('todoApp', ['ui.router'])
  .controller('LoginController', function(enrollment_service) {
    var self = this;

    self.login = function (username, password) {
    	console.log(username);
    	console.log(password);
      enrollment_service.studentID = username;
    }

    self.isActive = function(viewLocation) {
      return viewLocation === $location.path();
      console.log("HIHIHI")
    };
  });


   
