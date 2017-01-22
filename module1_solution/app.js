(function (){
	'use strict';
	
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.lunchList = "";
		$scope.message = "";
		$scope.setColor = "";
		
		
		$scope.checkLunch = function(){
			var lunchItems = $scope.lunchList.split(",");
			//replace empty items with marker
			var emptyLunchItems = checkForEmptyItems(lunchItems);
			var msg ="";
			$scope.setColor = "good";
			if($scope.lunchList.length ==0)
			{
				msg = "Please enter data first";
				$scope.setColor = "warning";
				emptyLunchItems = false;
			}else if (lunchItems.length <=3) {
				msg = 'Enjoy!' ;
			}else {
				msg = 'Too much!';
			}
		
			if(emptyLunchItems)
				msg += "   (empty lunch items have been removed)";
			
			//$scope.message = msg + ' :' + lunchItems + '   (' + lunchItems.length + ')';
			$scope.message = msg;
		};
		function checkForEmptyItems(listToCheck){
			var itemsRemoved = false;
			for(var i = 0; i <listToCheck.length; i++){
				//remove current item if it is empty string and reduce the value of i
				if(listToCheck[i] ==""){
				 listToCheck.splice(i--,1);
				 itemsRemoved = true;
				}
			}
			return itemsRemoved;
		};
	};
})();