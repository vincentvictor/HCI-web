angular.module('todoApp')
  .controller('ProfileController', function($http, enrollment_service) {
    var self = this;
    self.studentID = enrollment_service.studentID;
  });
