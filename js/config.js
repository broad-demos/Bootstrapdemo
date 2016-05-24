app.config(function($stateProvider, $urlRouterProvider,$locationProvider){
   
    $urlRouterProvider.otherwise("/");
	
    $stateProvider
      .state('/', {
          url: "/",
          templateUrl: "views/home.html",
          controller: 'homeCtrl'	  
      })      
      .state('datagrid', {
          url: "/datagrid",
          templateUrl: "views/datagrid.html",
          controller: 'datagridCtrl'
      })
      
      .state('treeviewer', {
            url: "/treeviewer",
            templateUrl: "views/treeviewer.html",
            controller: 'treeviewerCtrl'
        })
		
		.state('form', {
            url: "/form",
            templateUrl: "views/form.html",
            controller: 'formCtrl'
        })
		
		.state('wizard', {
            url: "/wizard",
            templateUrl: "views/wizard.html",
            controller: 'wizardCtrl'
        })
		
		.state('iframe', {
            url: "/iframe",
            templateUrl: "views/iframe.html",
            controller: 'iframeCtrl'
        })
		
		.state('tab', {
            url: "/tab",
            templateUrl: "views/tab.html",
            controller: 'tabCtrl'
        })
		
		.state('breadcrumb', {
            url: "/breadcrumb",
            templateUrl: "views/breadcrumb.html",
            controller: 'breadcrumbCtrl'
        })	
		
		.state('combo', {
            url: "/combo",
            templateUrl: "views/combo.html",
            controller: 'comboCtrl'
        })
		
		.state('pagination', {
            url: "/pagination",
            templateUrl: "views/pagination.html",
            controller: 'paginationCtrl'
        })

		.state('carousel', {
            url: "/carousel",
            templateUrl: "views/carousel.html",
            controller: 'carouselCtrl'
        })
		.state('parent1', {
                url: '',
                views: {
                    'view1@parent1': {
                        templateUrl: "views/carousel.html"
                    }
                }
            });		
   
    
  }).run(function($rootScope, $state) {
      $rootScope.$state = $state;

  });