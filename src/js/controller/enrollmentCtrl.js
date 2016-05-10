angular.module('todoApp')
    .controller('EnrollmentController', function($http, enrollment_service, $state) {
        var self = this;
        self.course_list = [];
        self.enroll_list = [];
        self.section = [{id: 'section1', name: '450'}, {id: 'section2', name: '451'}, {id: 'section3', name: '452'}];
        self.section_list = [];
        self.regisType = [{id: 'regisType1', name: 'Credit'}, {id: 'regisType2', name: 'Audit'}]
        self.regisType_list = [];
        self.studentID = enrollment_service.studentID;


        var student = {
          ID: '',
          name: '',
          myCourse: [],
          mySection: [],
          myRegisType: []
        };    
        
        // $http.get('https://whsatku.github.io/skecourses/list.json')
        // .success(function(response){
        // 	self.course_list = response
        // });

        $http.get('https://whsatku.github.io/skecourses/combined.json')
        .success(function(response){
          for(val in response){
              self.course_list.push(response[val]);
          }
          console.log(response)
        });

        self.add = function(course) {
       		for(val of self.course_list){
       			if(val = course){
       				self.course_list.splice(self.course_list.indexOf(val), 1);
       				break;
       			}
       		}
			    self.enroll_list.push(course)
          self.section_list.push('Sec')
          self.regisType_list.push('--')
        };
        
        self.remove = function(course) {
          for(val of self.enroll_list){
            if(val = course){
              self.enroll_list.splice(self.enroll_list.indexOf(val), 1);
              self.section_list.splice(self.enroll_list.indexOf(val),1);
              self.regisType_list.splice(self.enroll_list.indexOf(val),1);
              self.course_list.push(val);
              break;
            }
          }
        }

       
        self.setSection = function(course, section) {
          var index = self.enroll_list.indexOf(course)
          self.section_list[index] = section.name
          self.selectedSection = self.section_list[index]
        }


        self.setRegisType = function(course, regisType) {
          var index = self.enroll_list.indexOf(course)
          self.regisType_list[index] = regisType.name
          self.selectedSection = self.regisType_list[index]
        }

        self.submit = function () {
          student.ID = enrollment_service.studentID;
          student.name = "Nichamon Han-idhikul"
          student.myCourse = self.enroll_list;
          student.mySection = self.section_list;
          student.myRegisType = self.regisType_list;
          console.log(self.regisType_list)
          $http.post('http://52.37.98.127:3000/v1/5610545684?pin=5684', student)

          $http.get('http://52.37.98.127:3000/v1/5610545684?pin=5684')
          .success(function(response){
            self.enroll_list = response.myCourse
            self.section_list = response.mySection
          });

          enrollment_service.enroll_list = self.enroll_list
          enrollment_service.section_list = self.section_list
          $state.go('report')
        }
    });







