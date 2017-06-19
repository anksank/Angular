/* JavaScript Document */

/* everything that we are going to add here will be
the angular javascript content of the html */

(function() {

    /* all modules that should be available in an
    application should be declared this way */
    var app = angular.module('myCalculator', []);

    /* scope service allows us to pass variables between html and javascript */
    app.controller('CalculatorController', ['$scope', function($scope) {
        $scope.lumen_options = [375, 600, 900, 1125, 1600];
        $scope.current_lumens = 600;
				$scope.current_cost = 13;
				$scope.current_hours = 4;
				$scope.total_days = 365;
    }]);

    /* these are the two main parts of our application */

})();
