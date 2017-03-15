angular
.module('MainApp', [])
.controller('MainController', function($scope, $http){

	$scope.naming = false;
	$scope.address = false;

	var na = {}, 
		address = {},
		addressOf= {};

	$scope.students = [];

	function getStudents(){
		$http.get('/api/student/all').then(function(res){
			$scope.students = res.data;
		});
	}

	getStudents();

	$scope.addName = function() {
		if ($scope.name, $scope.age) {
			$scope.naming = false;
			$scope.address = true;
			na.name = $scope.name;
			na.age = $scope.age;
			$http.post("/api/student/create",na);
			addressOf = na;
			na = {};
			$scope.error = false	
			console.log(addressOf)
		} else {
			$scope.error = true
		}	
	};

	$scope.addNewAddress = function(student){
		addressOf = student;
		$scope.address = true;
		$scope.naming = false;
	}

	$scope.addAddress = function(){
			$scope.address = false;
			if($scope.hno, $scope.city, $scope.state, $scope.country){
				address.hno = $scope.hno;
				address.city = $scope.city;
				address.state = $scope.state;
				address.country = $scope.country;
				address.name = addressOf.name;
				address.age = addressOf.age;

				$http.post('/api/student/add/address',address).then(function(res){
					$scope.students = res.data;
				});	

				address={};
				addressOf={};

				$scope.error = false

			} else {
				$scope.error = true
			}
			
	}

});