angular.module('todoApp')
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /home
  //$urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "src/view/login.tmpl"
    })
    .state('enrollment', {
      url: "/enrollment",
      templateUrl: "src/view/enrollment.tmpl"
    })
    .state('profile', {
      url: "/profile",
      templateUrl: "src/view/profile.tmpl"
    })
    .state('report', {
      url: "/report",
      templateUrl: "src/view/report.tmpl"
    })
    .state('courseDes', {
      url: "/courseDes",
      templateUrl: "src/view/courseDes.tmpl"
    })
});
