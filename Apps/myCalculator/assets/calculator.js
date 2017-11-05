/* JavaScript Document */

/* everything that we are going to add here will be
the angular javascript content of the html */

(function () {

    /* all modules that should be available in an
    application should be declared this way */
    var app = angular.module('myCalculator', []);

    /* scope service allows us to pass variables between html and javascript */
    app.controller('CalculatorController', ['$scope', function ($scope) {
        $scope.lumen_options = [375, 600, 900, 1125, 1600];
        $scope.current_lumens = 600;
        $scope.current_cost = 12;
        $scope.current_hours = 3;
        $scope.total_days = 365;

        // variables for conversion values
        $scope.inc_conversion = 0.0625;
        $scope.hal_conversion = 0.0450;
        $scope.cfl_conversion = 0.0146;
        $scope.led_conversion = 0.0125;

        // custom function to update the calculations
        $scope.calculate = function () {
            // calculate all wattage values
            $scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
            $scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);
            $scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);
            $scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1);

            if ($scope.current_hours > 24) {
                $scope.current_hours = 24;
            }

            var total_hours = $scope.total_days * $scope.current_hours;
            var cost = $scope.current_cost / 100; // converting to cents

            $scope.inc_cost = (((total_hours * $scope.inc_wattage) / 1000) * cost).toFixed(2);
            $scope.hal_cost = (((total_hours * $scope.hal_wattage) / 1000) * cost).toFixed(2);
            $scope.cfl_cost = (((total_hours * $scope.cfl_wattage) / 1000) * cost).toFixed(2);
            $scope.led_cost = (((total_hours * $scope.led_wattage) / 1000) * cost).toFixed(2);

        }

        $scope.calculate();

    }]);

    /* these are the two main parts of our application */

})();