
//create navMenu
app.controller('navMenu',function($scope){
	$scope.menus=[
	{url:'datagrid',name:'datagrid'},
	{url:'treeviewer',name:'treeviewer'},
	{url:'form',name:'form'},
	{url:'wizard',name:'wizard'},
	{url:'iframe',name:'iframe'},
	{url:'tab',name:'tab'},
	{url:'breadcrumb',name:'breadcrumb'},
	{url:'combo',name:'combo'},
	{url:'pagination',name:'pagination'},
	{url:'carousel',name:'carousel'}
	];
});

app.controller('homeCtrl',function($scope,$http){
	$scope.menus=[
	{url:'datagrid',name:'datagrid'},
	{url:'treeviewer',name:'treeviewer'},
	{url:'form',name:'form'},
	{url:'wizard',name:'wizard'},
	{url:'iframe',name:'iframe'},
	{url:'tab',name:'tab'},
	{url:'breadcrumb',name:'breadcrumb'},
	{url:'combo',name:'combo'},
	{url:'pagination',name:'pagination'},
	{url:'carousel',name:'carousel'}
	];	
});

app.controller('datagridCtrl',function($scope,$http){
	
});

app.controller('treeviewerCtrl',function($scope,$http){
	
});	

app.controller('formCtrl',function($scope,$http){
	
});	

app.controller('wizardCtrl',function($scope,$http){
	
});	

app.controller('iframeCtrl',function($scope,$http){
	
});	

app.controller('tabCtrl',function($scope,$http){
	
});	

app.controller('breadcrumbCtrl',function($scope,$http){
	
});	

app.controller('comboCtrl',function($scope,$http){
	
});	

app.controller('paginationCtrl',function($scope,$http){

  $scope.itemsPerPage = 5;
  $scope.currentPage = 0;
  $scope.items = [];

  for (var i=1; i<=50; i++) {
    $scope.items.push({ id: i, firstname:'nisar',lastname:'mohamed',email:'nisr19@gmail.com' });
  }


  $scope.range = function() {
    var rangeSize = 5;
    var ret = [];
    var start;

    start = $scope.currentPage;
    if ( start > $scope.pageCount()-rangeSize ) {
      start = $scope.pageCount()-rangeSize+1;
    }
    else{
    	start=0;
    }
    console.log(start);

    for (var i=start; i<start+rangeSize; i++) {
      ret.push(i);
    }
    return ret;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.prevPageDisabled = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.items.length/$scope.itemsPerPage)-1;
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.nextPageDisabled = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

  $scope.setPage = function(n) {
    $scope.currentPage = n;
  };

});	

app.filter('offset', function() {
  return function(input, start) {
    start = parseInt(start);    
    return input.slice(start);
  };
});	

app.controller('carouselCtrl',function($scope,$http){
	
});	

	