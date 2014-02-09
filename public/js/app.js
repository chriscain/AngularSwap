var myApp = angular.module("myApp", ['ngRoute']);

myApp.controller('SwapController', function($scope, mockBackend) {

	$scope.pages = mockBackend.pages;
	$scope.daysOfTheWeek = mockBackend.daysOfTheWeek;
	$scope.pageIndex = 0;
	$scope.currentPage = $scope.pages[$scope.pageIndex];
	$scope.totalRange=[1,2,3,4,5,10,25];
	$scope.currentDay = 'monday';
	$scope.businesses = mockBackend.businesses;

});

myApp.config(function($routeProvider, $locationProvider) {

	$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'public/login.html',
				controller  : 'SwapController'
			})

			.when('/schedule', {
				templateUrl : 'public/schedule.html',
				controller  : 'SwapController'
			})

			.otherwise({
				redirectTo: '/'
			});

$locationProvider.html5Mode(true);


});