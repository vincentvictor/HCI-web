angular.module('todoApp')
    .controller('CourseDesController', function($http, enrollment_service) {
    	var self = this;
    	self.all_courses = [];
    	self.courses_name_en = [];
    	self.courses_id = [];
        self.studentID = enrollment_service.studentID;

		$http.get('https://whsatku.github.io/skecourses/combined.json')
        .success(function(response){
        	for(val in response){
            	self.all_courses.push(response[val]);
            }
        });

    });