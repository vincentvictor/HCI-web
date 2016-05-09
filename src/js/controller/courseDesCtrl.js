angular.module('todoApp')
    .controller('CourseDesController', function($http) {
    	var self = this;
    	self.all_courses = [];
    	self.courses_name_en = [];
    	self.courses_id = [];

		$http.get('https://whsatku.github.io/skecourses/combined.json')
        .success(function(response){
        	for(val in response){
            	self.all_courses.push(response[val]);
            }
        });

    });