app.config(function($stateProvider, $urlRouterProvider,$locationProvider){
   
    $urlRouterProvider.otherwise("/home");
	
    $stateProvider
      .state('home', {
          url: "/home",
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
            templateUrl: "views/bread-crumb.html",
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
		
		.state('carousel.carousel1', {
            url: "/carousel1",
            templateUrl: "views/carousel1.html",
            controller: 'carouselCtrl1'
        })
		
		.state('snippets', {
            url: "/snippets",
            templateUrl: "views/snippets.html",
            controller: 'snippetCtrl'
        })		

		.state('carousel.carousel2', {
            url: "/carousel2",            
			templateUrl: 'views/carousel2.html',
		    controller: 'carouselCtrl2' 
			
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