
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
	{url:'snippets',name:'snippets'},
	{url:'carousel',name:'carousel'},
	{url:'ngtable',name:'ng-Tables'}
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
	{url:'snippets',name:'snippets'},	
	{url:'carousel',name:'carousel'},
	{url:'ngtable',name:'ng-Tables'}
	];	
});



app.controller('treeviewerCtrl',function($scope,$http,bootFactory){
        var Data = [
          {
            text: 'Parent 1',
            href: '#parent1',
            tags: ['4'],
            nodes: [
              {
                text: 'Child 1',
                href: '#child1',
                tags: ['2'],
                nodes: [
                  {
                    text: 'Grandchild 1',
                    href: '#grandchild1',
                    tags: ['0']
                  },
                  {
                    text: 'Grandchild 2',
                    href: '#grandchild2',
                    tags: ['0']
                  }
                ]
              },
              {
                text: 'Child 2',
                href: '#child2',
                tags: ['0']
              }
            ]
          },
          {
            text: 'Parent 2',
            href: '#parent2',
			icon: 'glyphicon glyphicon-earphone',
            tags: ['0']
          },
          {
            text: 'Parent 3',
            href: '#parent3',
			icon: 'glyphicon glyphicon-cloud-download',
             tags: ['0']
          },
          {
            text: 'Parent 4',
            href: '#parent4',
			icon: 'glyphicon glyphicon-certificate',
            tags: ['0']
          },
          {
            text: 'Parent 5',
            href: '#parent5'  ,
            color: '#fff',
            backColor: '#C84F7A',			
            tags: ['available','0']
          }
        ];	
	bootFactory.treeviewer(Data);
	bootFactory.treeviewer1(Data);
	
 $scope.roleList1 = [
        { "roleName" : "User", "roleId" : "role1", "children" : [
          { "roleName" : "subUser1", "roleId" : "role11", "children" : [] },
          { "roleName" : "subUser2", "roleId" : "role12", "children" : [
            { "roleName" : "subUser2-1", "roleId" : "role121", "children" : [
              { "roleName" : "subUser2-1-1", "roleId" : "role1211", "children" : [] },
              { "roleName" : "subUser2-1-2", "roleId" : "role1212", "children" : [] }
            ]}
          ]}
        ]},

        { "roleName" : "Admin", "roleId" : "role2", "children" : [] },

        { "roleName" : "Guest", "roleId" : "role3", "children" : [] }
      ];

  	//test tree model 2
    $scope.roleList2 = [
        { "roleName" : "User", "roleId" : "role1", "children" : [
          { "roleName" : "subUser1", "roleId" : "role11", "collapsed" : true, "children" : [] },
          { "roleName" : "subUser2", "roleId" : "role12", "collapsed" : true, "children" : [
            { "roleName" : "subUser2-1", "roleId" : "role121", "children" : [
              { "roleName" : "subUser2-1-1", "roleId" : "role1211", "children" : [] },
              { "roleName" : "subUser2-1-2", "roleId" : "role1212", "children" : [] }
            ]}
          ]}
        ]},

        { "roleName" : "Admin", "roleId" : "role2", "children" : [
          { "roleName" : "subAdmin1", "roleId" : "role11", "collapsed" : true, "children" : [] },
          { "roleName" : "subAdmin2", "roleId" : "role12", "children" : [
            { "roleName" : "subAdmin2-1", "roleId" : "role121", "children" : [
              { "roleName" : "subAdmin2-1-1", "roleId" : "role1211", "children" : [] },
              { "roleName" : "subAdmin2-1-2", "roleId" : "role1212", "children" : [] }
            ]}
          ]}
        ]},

        { "roleName" : "Guest", "roleId" : "role3", "children" : [
          { "roleName" : "subGuest1", "roleId" : "role11", "children" : [] },
          { "roleName" : "subGuest2", "roleId" : "role12", "collapsed" : true, "children" : [
            { "roleName" : "subGuest2-1", "roleId" : "role121", "children" : [
              { "roleName" : "subGuest2-1-1", "roleId" : "role1211", "children" : [] },
              { "roleName" : "subGuest2-1-2", "roleId" : "role1212", "children" : [] }
            ]}
          ]}
        ]}
      ];

      
      
    //roleList1 to treeview
    $scope.roleList = $scope.roleList1;	
});	


app.controller('formCtrl',['$scope', '$http', function($scope,$http){
	
 $scope.countryList = [
 { CountryId: 1, Name: 'India' },
 { CountryId: 2, Name: 'USA' }
 ];
 
 $scope.cityList = [];
 
 $scope.$watch('user.country', function (newVal,oldVal) {
 
 if (newVal == 1)
 $scope.cityList = [
 { CountryId: 1, CityId: 1, Name: 'Noida' },
 { CountryId: 1, CityId: 2, Name: 'Delhi' }];
 else if (newVal == 2)
 $scope.cityList = [
 { CountryId: 2, CityId: 3, Name: 'Texas' },
 { CountryId: 2, CityId: 4, Name: 'NewYork' }];
 else
 $scope.cityList = [];

 });
 
 // function to submit the form after all validation has occurred 
 $scope.submitForm = function () {
 // Set the 'submitted' flag to true
 $scope.submitted = true;
 
 if ($scope.userForm.$valid) {
 alert("Form is valid!");
 }
 else {
 //alert("Please correct errors!");
 }
 }; 
 
}]);	

app.controller('wizardCtrl',function($scope,$http){
	
});	

app.controller('iframeCtrl',function($scope,$http){
	
});	

app.controller('tabCtrl',function($scope,$window){
	
  $scope.tabs = [
    { title:'Tab 1', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?' },
	
    { title:'Tab 2', content:'Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!' },
	
	{ title:'Tab 3', content:' Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?' },
	
	{ title:'Tab 4', content:' Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!' }
  ];	
  
  $scope.model = {
    name: 'Tabs'
  };
  
});	

app.controller('breadcrumbCtrl',function($scope,$http){
	
});

app.controller('comboCtrl',function($scope,$http){
	
});	

app.controller('paginationCtrl',function($scope,$http){

  $scope.itemsPerPage = 5;
  $scope.currentPage = 0;
  $scope.items = [];

  for (var i=1; i<=100; i++) {
    $scope.items.push({ id: i, firstname:'xxx',lastname:'yyy',email:'xxx@gmail.com' });
  }


  $scope.range = function() {
    var rangeSize = 5;
    var ret = [];
    var start;

    start = $scope.currentPage;
    if ( start > $scope.pageCount()-rangeSize ) {
      start = $scope.pageCount()-rangeSize+1;
    }
  
   
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


  //create array for exmples array
  $scope.examples=[{url:'http://jasonwatmore.com/post/2016/01/31/AngularJS-Pagination-Example-with-Logic-like-Google.aspx',description:'Boostrap angularjs pagination'},
  {url:'http://plnkr.co/edit/LUqL5c4xSTqPy77r7spA?p=preview',description:'Custom directive boostrap pagination'}];

  //custom directive pagination with start and end page number
  $scope.users = []; //declare an empty array
	$http.get("json/mock.json").success(function(response){ 
		$scope.users = response;  //ajax request to fetch data into $scope.data
	});
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}	


	//uib-pagination 
 	 $scope.maxSize = 5;
 	 $scope.bigTotalItems = 175;
 	 $scope.bigCurrentPage = 1;
});	

app.filter('offset', function() {
  return function(input, start) {
    start = parseInt(start);    
    return input.slice(start);
  };
});	

app.controller('carouselCtrl',function($scope,$http){
	
});	

app.controller('carouselCtrl1',function($scope,$http){

	
});	
app.controller('carouselCtrl2',function($scope){
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
  
  $scope.addSlide = function() {

    slides.push({
      image: ['img/carousel/1.jpg','img/carousel/2.jpg','img/carousel/3.jpg','img/carousel/4.jpg'][slides.length % 4],
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };	
  
  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  } 
  
  
});	

app.controller('snippetCtrl',function($scope,$http){

	
});

app.controller('ngtableCtrl',function($scope,$http){

	
});

app.controller('datagridCtrl',function($scope,$http,$filter, $log,$interval){
	// an example grid config
	 // $scope.dateOfBirth = new Date();

            $scope.gridConfig = {
                options: {
                    showDeleteButton: true,
                    showEditButton: true,
                    editRequested: function (row) { console.log('edit request:', row); },
                    rowDeleted: function (row) { console.log('deleted:', row); },
                    cellFocused: function (row, column) { console.log('focused:', row, column); },
                    rowSelected: function (row) { console.log('selected:', row); },
                    //orderBy: 'age',
                    //reverseOrder: false,
                    editable: true, // true is the default - set here manually to true to make it easier to bind to in the demo html
                    disabled: false,
                    perRowEditModeEnabled: true,
                    allowMultiSelect: true,
                    pageSize: 5,
                    pageNum: 0,
                    dynamicColumns: true,
                    columns: [
                        {
                            field: 'name',
                            // no inputType -> default is text
                            getUrl: function(row) { return '#/' + row.age; },
                            required: true
                        },
                        {
                            field: 'age',
                            inputType: 'number'
                        },
                        {
                            field: 'sex',
                            inputType: 'select',
                            options: [{ value: 0, title: 'Male'}, { value: 1, title: 'Female'}],
                            formatter: function(item) { return item.title; },
                            select: function(item) { return item.value; }
                        },
                        {
                            field: 'food',
                            title: 'Favorite Lunch',
                            inputType: 'text',
                            disabled: true
                        },
                        {
                            field: 'dateOfBirth',
                            title: 'Date of Birth',
                            inputType: 'date',
                            formatter: function (value) { return $filter('date')(value, 'MM/dd/yyyy'); }
                        },
                        {
                            field: 'approved',
                            title: 'Approved?',
                            inputType: 'checkbox'
                        }
                    ]
                },
                getData: function () { return $scope.data; }
            };
            
            $scope.metaGridConfig = {
                options: {
                    editable: true,
                    columns: [
                        {
                            field: 'field',
                            required: true
                        },
                        {
                            field: 'title'
                        },
                        {
                            field: 'inputType',
                            inputType: 'select',
                            options: ['text', 'number', 'select', 'checkbox', 'date']
                        },
                        {
                            field: 'dateFormat',
                            inputType: 'text'
                        },
                        {
                            field: 'required',
                            inputType: 'checkbox'
                        },
                        {
                            field: 'disabled',
                            inputType: 'checkbox'
                        }
                    ]
                },
                getData: function () { return $scope.gridConfig.options.columns; }
            };

            $scope.data = [ { name: 'Jooka', age: 1, sex: 0, food: 'Cookies', dateOfBirth: '1989-07-30T18:30:00.000Z', approved: false },
                            { name: 'Schmo', age: 100, sex: 1, food: 'Steak', dateOfBirth: '1989-07-30T18:30:00.000Z', approved: true },
                            { name: 'Sparky', age: 43, food: 'Cereal', dateOfBirth: '1989-07-30T18:30:00.000Z', approved: false }
                          ];
            
            $scope.data = repeat($scope.data, 30);
            
            // an empty grid: same options, no data.
            $scope.emptyData = [];
            $scope.gridConfigEmpty = { options: $scope.gridConfig.options, getData: function () { return $scope.emptyData; } };

            // utility stuff
            $scope.movePage = function (offset) {
                $scope.gridConfig.options.pageNum += offset;
                $scope.gridConfig.options.pageNum = Math.max(0, $scope.gridConfig.options.pageNum);
            };
            
            $scope.filterDeleted = function (rows) {
                // TODO: Exteremly inefficient...
                var filtered = rows.filter(function (row) { return !row.$deleted; });
                rows.splice(0, rows.length);
                angular.forEach(filtered, function (item) {
                    rows.push(item);
                });
            };

            $scope.pretty = function (obj) {
                var filteredObj = angular.copy(obj);
                angular.forEach(filteredObj, function (val, name) {
                    if (name[0] === '$') {
                        delete filteredObj[name];
                    }
                });
                return JSON.stringify(filteredObj, undefined, '    ');
            };

            $scope.addRow = function () {
                var data = $scope.gridConfig.getData();
                data.push(
                    {
                        $added: true,
                        $editable: true
                    }
                );
                $scope.gridConfig.options.pageNum = Math.floor(data.length / $scope.gridConfig.options.pageSize);
            };

          $("#target-table").datagrid({
              editable:true,
              onBoot: function(e){
                         },
              onCommit: function(e) {
                alert("Commiting '"+e.$editor.val()+"'...")
              },
              onClean: function(e) {
                alert("Clean triggered!")
              }
          });
          $scope.simpleGridData=[{name:'abc',age:12,email:'abc@gmail.com'}]

          $scope.models = {
      changeInfo: [],
      searchText: '',
      selectedCars: [
        {
          id: 1,
          name: 'Audi A4',
          modelYear: 2009,
          price: 34000
        }
      ],
      carsForSale: [
        {
          id: 1,
          name: 'Audi A4',
          modelYear: 2009,
          price: 34000
        },
        {
          id: 2,
          name: 'BMW 328i',
          modelYear: 2012,
          price: 39000
        },
        {
          id: 3,
          name: 'Audi A6',
          modelYear: 2012,
          price: 44000
        },
        {
          id: 4,
          name: 'Audi S8',
          modelYear: 2014,
          price: 100000
        },
        {
          id: 5,
          name: 'Audi A4',
          modelYear: 2009,
          price: 34000
        },
        {
          id: 6,
          name: 'BMW 328i',
          modelYear: 2012,
          price: 39000
        },
        {
          id: 7,
          name: 'Audi A6',
          modelYear: 2012,
          price: 44000
        },
        {
          id: 8,
          name: 'Audi S8',
          modelYear: 2014,
          price: 100000
        },
        {
          id: 9,
          name: 'Audi A6',
          modelYear: 2012,
          price: 44000
        },
        {
          id: 10,
          name: 'Audi S8',
          modelYear: 2014,
          price: 100000
        },
        {
          id: 11,
          name: 'Audi A6',
          modelYear: 2012,
          price: 44000
        },
        {
          id: 12,
          name: 'Audi S8',
          modelYear: 2014,
          price: 100000
        }
      ],
      state: {
        sortKey: 'name',
        sortDirection: 'DEC'
      }
    };

    $scope.carsTableColumnDefinition = [
      {
        columnHeaderDisplayName: 'Model',
        displayProperty: 'name',
        sortKey: 'name',
        columnSearchProperty: 'name',
        visible: true
      },
      {
        columnHeaderTemplate: '<span><i class="glyphicon glyphicon-calendar"></i> Model Year</span>',
        template: '<strong>{{ item.modelYear }}</strong>',
        sortKey: 'modelYear',
        width: '12em',
        columnSearchProperty: 'modelYear'
      },
      {
        columnHeaderTemplate: '<span><i class="glyphicon glyphicon-usd"></i> Price</span>',
        displayProperty: 'price',
        cellFilter: 'currency',
        sortKey: 'price',
        width: '9em',
        columnSearchProperty: 'price'
      },
      {
        columnHeaderDisplayName: 'Buy',
        templateUrl: 'src/tablelite/docs/buyCell.html',
        width: '4em'
      }
    ];

    $scope.onDragChange = function(o, n, data) {
      $scope.models.changeInfo.push({
        startPosition: o,
        endPosition: n,
        data: data
      });
    };

    $scope.onStateChange = function(state) {
      alert(JSON.stringify(state));
    };

    // ========== ui handlers ========== //
    $scope.buyCar = function (car) {
      alert(car.name);
    };

    $scope.rowExpanded = function (car) {
      alert(car.name + ' row expanded');
    };

    $scope.checkRowSelected = function (item, index) {
      var found = false;
      $scope.models.selectedCars.forEach(function (selectedItem) {
        if (item.id === selectedItem.id) {
          found = true;
        }
      });
      return found ? 'info row-' + index : 'row-' + index;
    };

      //ui grid 
        $scope.gridOptions = {
    exporterMenuCsv: false,
    enableGridMenu: true,
    gridMenuTitleFilter: fakeI18n,
    columnDefs: [
      { name: 'name' },
      { name: 'gender', enableHiding: false },
      { name: 'company' }
    ],
    gridMenuCustomItems: [
      {
        title: 'Rotate Grid',
        action: function ($event) {
          this.grid.element.toggleClass('rotated');
        },
        order: 210
      }
    ],
    onRegisterApi: function( gridApi ){
      $scope.gridApi = gridApi;

      // interval of zero just to allow the directive to have initialized
      $interval( function() {
        gridApi.core.addToGridMenu( gridApi.grid, [{ title: 'Dynamic item', order: 100}]);
      }, 0, 1);

      gridApi.core.on.columnVisibilityChanged( $scope, function( changedColumn ){
        $scope.columnChanged = { name: changedColumn.colDef.name, visible: changedColumn.colDef.visible };
      });
    }
  };
  var fakeI18n = function( title ){
    var deferred = $q.defer();
    $interval( function() {
      deferred.resolve( 'col: ' + title );
    }, 1000, 1);
    return deferred.promise;
  };
    $scope.gridOptions.data = [
    {
        "name": "Ethel Price",
        "gender": "female",
        "company": "Enersol"
    },
    {
        "name": "Claudine Neal",
        "gender": "female",
        "company": "Sealoud"
    },
    {
        "name": "Beryl Rice",
        "gender": "female",
        "company": "Velity"
    },
    {
        "name": "Wilder Gonzales",
        "gender": "male",
        "company": "Geekko"
    },
    {
        "name": "Georgina Schultz",
        "gender": "female",
        "company": "Suretech"
    },
    {
        "name": "Carroll Buchanan",
        "gender": "male",
        "company": "Ecosys"
    },
    {
        "name": "Valarie Atkinson",
        "gender": "female",
        "company": "Hopeli"
    },
    {
        "name": "Schroeder Mathews",
        "gender": "male",
        "company": "Polarium"
    },
    {
        "name": "Lynda Mendoza",
        "gender": "female",
        "company": "Dogspa"
    },
    {
        "name": "Sarah Massey",
        "gender": "female",
        "company": "Bisba"
    },
    {
        "name": "Robles Boyle",
        "gender": "male",
        "company": "Comtract"
    },
    {
        "name": "Evans Hickman",
        "gender": "male",
        "company": "Parleynet"
    },
    {
        "name": "Dawson Barber",
        "gender": "male",
        "company": "Dymi"
    },
    {
        "name": "Bruce Strong",
        "gender": "male",
        "company": "Xyqag"
    },
    {
        "name": "Nellie Whitfield",
        "gender": "female",
        "company": "Exospace"
    },
    {
        "name": "Jackson Macias",
        "gender": "male",
        "company": "Aquamate"
    },
    {
        "name": "Pena Pena",
        "gender": "male",
        "company": "Quarx"
    },
    {
        "name": "Lelia Gates",
        "gender": "female",
        "company": "Proxsoft"
    },
    {
        "name": "Letitia Vasquez",
        "gender": "female",
        "company": "Slumberia"
    },
    {
        "name": "Trevino Moreno",
        "gender": "male",
        "company": "Conjurica"
    },
    {
        "name": "Barr Page",
        "gender": "male",
        "company": "Apex"
    },
    {
        "name": "Kirkland Merrill",
        "gender": "male",
        "company": "Utara"
    },
    {
        "name": "Blanche Conley",
        "gender": "female",
        "company": "Imkan"
    },
    {
        "name": "Atkins Dunlap",
        "gender": "male",
        "company": "Comveyor"
    },
    {
        "name": "Everett Foreman",
        "gender": "male",
        "company": "Maineland"
    },
    {
        "name": "Gould Randolph",
        "gender": "male",
        "company": "Intergeek"
    },
    {
        "name": "Kelli Leon",
        "gender": "female",
        "company": "Verbus"
    },
    {
        "name": "Freda Mason",
        "gender": "female",
        "company": "Accidency"
    },
    {
        "name": "Tucker Maxwell",
        "gender": "male",
        "company": "Lumbrex"
    },
    {
        "name": "Yvonne Parsons",
        "gender": "female",
        "company": "Zolar"
    },
    {
        "name": "Woods Key",
        "gender": "male",
        "company": "Bedder"
    },
    {
        "name": "Stephens Reilly",
        "gender": "male",
        "company": "Acusage"
    },
    {
        "name": "Mcfarland Sparks",
        "gender": "male",
        "company": "Comvey"
    },
    {
        "name": "Jocelyn Sawyer",
        "gender": "female",
        "company": "Fortean"
    },
    {
        "name": "Renee Barr",
        "gender": "female",
        "company": "Kiggle"
    },
    {
        "name": "Gaines Beck",
        "gender": "male",
        "company": "Sequitur"
    },
    {
        "name": "Luisa Farrell",
        "gender": "female",
        "company": "Cinesanct"
    },
    {
        "name": "Robyn Strickland",
        "gender": "female",
        "company": "Obones"
    },
    {
        "name": "Roseann Jarvis",
        "gender": "female",
        "company": "Aquazure"
    },
    {
        "name": "Johnston Park",
        "gender": "male",
        "company": "Netur"
    },
    {
        "name": "Wong Craft",
        "gender": "male",
        "company": "Opticall"
    },
    {
        "name": "Merritt Cole",
        "gender": "male",
        "company": "Techtrix"
    },
    {
        "name": "Dale Byrd",
        "gender": "female",
        "company": "Kneedles"
    },
    {
        "name": "Sara Delgado",
        "gender": "female",
        "company": "Netagy"
    },
    {
        "name": "Alisha Myers",
        "gender": "female",
        "company": "Intradisk"
    },
    {
        "name": "Felecia Smith",
        "gender": "female",
        "company": "Futurity"
    },
    {
        "name": "Neal Harvey",
        "gender": "male",
        "company": "Pyramax"
    },
    {
        "name": "Nola Miles",
        "gender": "female",
        "company": "Sonique"
    },
    {
        "name": "Herring Pierce",
        "gender": "male",
        "company": "Geeketron"
    },
    {
        "name": "Shelley Rodriquez",
        "gender": "female",
        "company": "Bostonic"
    },
    {
        "name": "Cora Chase",
        "gender": "female",
        "company": "Isonus"
    },
    {
        "name": "Mckay Santos",
        "gender": "male",
        "company": "Amtas"
    },
    {
        "name": "Hilda Crane",
        "gender": "female",
        "company": "Jumpstack"
    },
    {
        "name": "Jeanne Lindsay",
        "gender": "female",
        "company": "Genesynk"
    },
    {
        "name": "Frye Sharpe",
        "gender": "male",
        "company": "Eplode"
    },
    {
        "name": "Velma Fry",
        "gender": "female",
        "company": "Ronelon"
    },
    {
        "name": "Reyna Espinoza",
        "gender": "female",
        "company": "Prismatic"
    },
    {
        "name": "Spencer Sloan",
        "gender": "male",
        "company": "Comverges"
    },
    {
        "name": "Graham Marsh",
        "gender": "male",
        "company": "Medifax"
    },
    {
        "name": "Hale Boone",
        "gender": "male",
        "company": "Digial"
    },
    {
        "name": "Wiley Hubbard",
        "gender": "male",
        "company": "Zensus"
    },
    {
        "name": "Blackburn Drake",
        "gender": "male",
        "company": "Frenex"
    },
    {
        "name": "Franco Hunter",
        "gender": "male",
        "company": "Rockabye"
    },
    {
        "name": "Barnett Case",
        "gender": "male",
        "company": "Norali"
    },
    {
        "name": "Alexander Foley",
        "gender": "male",
        "company": "Geekosis"
    },
    {
        "name": "Lynette Stein",
        "gender": "female",
        "company": "Macronaut"
    },
    {
        "name": "Anthony Joyner",
        "gender": "male",
        "company": "Senmei"
    },
    {
        "name": "Garrett Brennan",
        "gender": "male",
        "company": "Bluegrain"
    },
    {
        "name": "Betsy Horton",
        "gender": "female",
        "company": "Zilla"
    },
    {
        "name": "Patton Small",
        "gender": "male",
        "company": "Genmex"
    },
    {
        "name": "Lakisha Huber",
        "gender": "female",
        "company": "Insource"
    },
    {
        "name": "Lindsay Avery",
        "gender": "female",
        "company": "Unq"
    },
    {
        "name": "Ayers Hood",
        "gender": "male",
        "company": "Accuprint"
    },
    {
        "name": "Torres Durham",
        "gender": "male",
        "company": "Uplinx"
    },
    {
        "name": "Vincent Hernandez",
        "gender": "male",
        "company": "Talendula"
    },
    {
        "name": "Baird Ryan",
        "gender": "male",
        "company": "Aquasseur"
    },
    {
        "name": "Georgia Mercer",
        "gender": "female",
        "company": "Skyplex"
    },
    {
        "name": "Francesca Elliott",
        "gender": "female",
        "company": "Nspire"
    },
    {
        "name": "Lyons Peters",
        "gender": "male",
        "company": "Quinex"
    },
    {
        "name": "Kristi Brewer",
        "gender": "female",
        "company": "Oronoko"
    },
    {
        "name": "Tonya Bray",
        "gender": "female",
        "company": "Insuron"
    },
    {
        "name": "Valenzuela Huff",
        "gender": "male",
        "company": "Applideck"
    },
    {
        "name": "Tiffany Anderson",
        "gender": "female",
        "company": "Zanymax"
    },
    {
        "name": "Jerri King",
        "gender": "female",
        "company": "Eventex"
    },
    {
        "name": "Rocha Meadows",
        "gender": "male",
        "company": "Goko"
    },
    {
        "name": "Marcy Green",
        "gender": "female",
        "company": "Pharmex"
    },
    {
        "name": "Kirk Cross",
        "gender": "male",
        "company": "Portico"
    },
    {
        "name": "Hattie Mullen",
        "gender": "female",
        "company": "Zilencio"
    },
    {
        "name": "Deann Bridges",
        "gender": "female",
        "company": "Equitox"
    },
    {
        "name": "Chaney Roach",
        "gender": "male",
        "company": "Qualitern"
    },
    {
        "name": "Consuelo Dickson",
        "gender": "female",
        "company": "Poshome"
    },
    {
        "name": "Billie Rowe",
        "gender": "female",
        "company": "Cemention"
    },
    {
        "name": "Bean Donovan",
        "gender": "male",
        "company": "Mantro"
    },
    {
        "name": "Lancaster Patel",
        "gender": "male",
        "company": "Krog"
    },
    {
        "name": "Rosa Dyer",
        "gender": "female",
        "company": "Netility"
    },
    {
        "name": "Christine Compton",
        "gender": "female",
        "company": "Bleeko"
    },
    {
        "name": "Milagros Finch",
        "gender": "female",
        "company": "Handshake"
    },
    {
        "name": "Ericka Alvarado",
        "gender": "female",
        "company": "Lyrichord"
    },
    {
        "name": "Sylvia Sosa",
        "gender": "female",
        "company": "Circum"
    },
    {
        "name": "Humphrey Curtis",
        "gender": "male",
        "company": "Corepan"
    }
];
});



	