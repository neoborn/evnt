function MainCtrl($scope){
	$scope.user = {auth : "Login"};
	$scope.events = [
	{title: "Event 1", time: "TUE 12:30 14 Jan 2014", budget: 1000, crowd: 20, remark: "Testing only", services: []},
	];

	$scope.selected_services = {};
	
	$scope.addEvent = function(event){
		if (event){
			var services = [];
			$.each($scope.selected_services, function(k, v) {
				if (v) services.push({id: k});
			});
			event.services = services;
			$scope.events.push(event);
		}
		//var ev = angular.toJson(event);
		//ev["added_services"] = angular.toJson(services, true);
		//$scope.events.push(event);
		//console.log(event);
		//$scope.selected_services = {};
	}


	$scope.categories = [ {name: "place", id: 1},
	{name: "food", id:2},
	{name: "photography", id:3},
	{name: "printing", id: 4}
	];

	$scope.services = [
	{name: "Company Name", addr: "Blk 25 Bras Basah Complex", cid: 4, mincost: 20, maxcost: 40},
	{name: "Company Name1", addr: "Blk 26 Bras Basah Complex", cid: 1, mincost: 20, maxcost: 40},
	{name: "Company Name2", addr: "Blk 27 Bras Basah Complex", cid: 2, mincost: 20, maxcost: 40},
	{name: "Company Name3", addr: "Blk 28 Bras Basah Complex", cid: 1, mincost: 20, maxcost: 40},
	{name: "Company Name4", addr: "Blk 29 Bras Basah Complex", cid: 3, mincost: 20, maxcost: 40}
	];

}