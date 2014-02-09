var myApp = angular.module('myApp', []);

myApp.controller('SwapController', function($scope, mockBackend) {

	$scope.pages = mockBackend.pages;
	$scope.daysOfTheWeek = mockBackend.daysOfTheWeek;
	$scope.pageIndex = 0;
	$scope.currentPage = $scope.pages[$scope.pageIndex];
	$scope.totalRange=[1,2,3,4,5,10,25];
	$scope.currentDay = 'monday';
	$scope.businesses = mockBackend.businesses;

	$scope.swipeLeft = function() {
		if ($scope.pageIndex === 0)
			return;
		else {
			$scope.pageIndex--;
			$scope.currentPage = $scope.pages[$scope.pageIndex];
		}
	};

	$scope.swipeRight = function() {
		$scope.pageIndex++;
		$scope.currentPage = $scope.pages[$scope.pageIndex];
	};

	$scope.swipeRightSchedule = function(day) {
		if (day.next)
		{
			$scope.currentDay = day.next;
			console.log($scope.current);
		}
	};

	$scope.swipeLeftSchedule = function(day) {
		if (day.prev)
		{
			$scope.currentDay = day.prev;
		}
	};

	$scope.setAttrs = function(day) {
		console.log(day.day.leftPercent);
		return {
			left: day.day.leftPercent + "%"
		};
	};



});