/*global  angular:false */
/*jslint sub: true, browser: true, indent: 4, vars: true, nomen: true */
'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('rgv', ['rgv.resources', 'ngTouch', 'ui.grid', 'ui.grid.grouping', 'ui.grid.selection','angular-carousel', 'ngDialog', 'ngHandsontable', 'ngTableToCsv', 'ngFileUpload', 'ngSanitize', 'ngCookies', 'angular-js-xlsx', 'ngRoute','angular-venn', 'ui.bootstrap', 'datatables', 'ui.tree', 'uuid', 'ngTable','angucomplete-alt']).

config(['$routeProvider','$logProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'appCtrl'
        });
        $routeProvider.when('/about', {
            templateUrl: 'views/about.html',
            controller: 'noCtrl'
        });
        $routeProvider.when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactCtrl'
        });
        $routeProvider.when('/citing', {
            templateUrl: 'views/citing.html',
            controller: 'noCtrl'
        });
        $routeProvider.when('/funders', {
            templateUrl: 'views/funders.html',
            controller: 'noCtrl'
        });
		$routeProvider.when('/resources', {
            templateUrl: 'views/resources.html',
            controller: 'noCtrl'
        });
		$routeProvider.when('/getinvolved', {
            templateUrl: 'views/getinvolved.html',
            controller: 'noCtrl'
        });
		$routeProvider.when('/technicalcorner', {
            templateUrl: 'views/technicalcorner.html',
            controller: 'noCtrl'
        });
		$routeProvider.when('/news', {
            templateUrl: 'views/news.html',
            controller: 'newsCtrl'
        });
		$routeProvider.when('/statistics', {
            templateUrl: 'views/statistics.html',
            controller: 'noCtrl'
        });
        $routeProvider.when('/download', {
            templateUrl: 'views/download.html',
            controller: 'noCtrl'
        });
        $routeProvider.when('/tutorial', {
            templateUrl: 'views/tutorial.html',
            controller: 'noCtrl'
        });
        $routeProvider.when('/studies', {
            templateUrl: 'views/studies.html',
            controller: 'noCtrl'
        });

        $routeProvider.when('/browser_genome', {
            templateUrl: 'views/browser_genome.html',
            controller: 'noCtrl'
        });
        $routeProvider.when('/browser_genelevel', {
            templateUrl: 'views/browser_genelevel.html',
            controller: 'browsergenelevelCtrl'
        });
        $routeProvider.when('/browser_scRNAseq', {
            templateUrl: 'views/browser_scRNAseq.html',
            controller: 'noCtrl'
        });

		$routeProvider.when('/query', {
            templateUrl: 'views/query.html',
            controller: 'queryCtrl'
        });
        $routeProvider.when('/recover', {
            templateUrl: 'views/recover.html',
            controller: 'recoverCtrl'
        });
        $routeProvider.when('/signin', {
            templateUrl: 'views/signin.html',
            controller: 'signinCtrl'
        });
        $routeProvider.when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        });
        $routeProvider.when('/search', {
            templateUrl: 'views/search.html',
            controller: 'searchCtrl'
        });
       $routeProvider.otherwise({
            redirectTo: '/'
        });
}]).

config(['$httpProvider', function ($httpProvider){
    $httpProvider.interceptors.push( function($q, $window){
        return {
            'request': function (config) {
                 config.headers = config.headers || {};
                 if ($window.sessionStorage.token) {
                     config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                 }
                 return config;
            },
            'response': function(response){
                return response;
            },
            'responseError': function(rejection){
                if(rejection.status == 401) {
                    // Route to #/login
                    location.replace('#/');
                }
                return $q.reject(rejection);
            }
        };
    });
}]);

// Dédié aux pages n'ayant pas besoin de contrôleur (ex que du texte)
angular.module('rgv').controller('userCtrl',
    function ($scope,$rootScope, $log, Auth, User,$location) {
});

// Dédié aux pages n'ayant pas besoin de contrôleur (ex que du texte)
angular.module('rgv').controller('userCtrl',
    function ($scope,$rootScope, $log, Auth, User,$location) {
});


//Page contact avec mail crypté
angular.module('rgv').controller('contactCtrl',
    function ($scope,$rootScope, $log, Auth, User,$location) {
      // Email obfuscator script 2.1 by Tim Williams, University of Arizona
      // Random encryption key feature coded by Andrew Moulden
      // This code is freeware provided these four comment lines remain intact
      // A wizard to generate this code is at http://www.jottings.com/obfuscator/
      //FRED
      var coded = "oVWsWVf0.0AELSWL@fFXWVS.oV";
      var key = "ZF1L2i9xQRYXc8U3AjG4bdEVS5uJzKefwgvOpn0lICk7N6TsMqPthyDHWoarmB";
      var shift=coded.length;
      var  link="";
        for (var i=0; i<coded.length; i++) {
          if (key.indexOf(coded.charAt(i))==-1) {
            var ltr = coded.charAt(i);
            link += (ltr);
          }
          else {
            var ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
            link += (key.charAt(ltr));
          }
        }
      document.getElementById("fredmail").innerHTML = "<a class='btn btn-primary btn-twitter btn-sm'  href='mailto:"+link+"'><i class='fa fa-envelope' aria-hidden='true'></i></a>";


      //Olivier
       var coded2 = "m0ZZk4F@KI1k0ImF.k4K"
       var key2 = "WzQNcmYhIRdZSqu3igakJUBOEnDCbAw7rT0HfKGlt5yj61Ms8Lev4pVx2P9XFo"
       var coded2 = "AM55hs9@7nqhMnA9.hs7";
       var key2 = "prZC9jNPfn0ioLMwy3S75sHxav84QqcEhlYDzGUTKAkRXJt6W1BeOIbVu2dFmg";
       var shift2=coded2.length;
       var link2="";
       for (var z=0; z<coded2.length; z++) {
         if (key2.indexOf(coded2.charAt(z))==-1) {
           var ltr2 = coded2.charAt(z);
           link2 += (ltr2);
         }
         else {
           var ltr2 = (key2.indexOf(coded2.charAt(z))-shift2+key2.length) % key2.length;
           link2 += (key2.charAt(ltr2));
         }
       }
       console.log(link2);
      document.getElementById("oliviermail").innerHTML = "<a class='btn btn-primary btn-twitter btn-sm'  href='mailto:"+link2+"'><i class='fa fa-envelope' aria-hidden='true'></i></a>";

});

// Page news - récupère les news du fichiers JSON local
angular.module('rgv').controller('newsCtrl',
    function ($scope,$rootScope, $log, Auth, Dataset, User,$location) {

      //Récupération news from local json file
      Dataset.news_feed().$promise.then(function(news){
        console.log(news);
        if(news.status != 1){
          $scope.newsfeed = news.data["news_list"];
          console.log($scope.newsfeed);
        }
        else {
          $scope.msg = news.msg;
        };
      });

});


angular.module('rgv').controller('browsergenelevelCtrl',
    function ($scope,$rootScope,$http, Dataset) {
        Dataset.read_file().$promise.then(function(dataset){
			console.log(dataset);
			$scope.species=dataset.data;
		});

    //GridData (ag-grid) system definition
    $scope.main = this;

    //liste 
    $scope.selected = [];

    $scope.main.gridOptions = {
      treeRowHeaderAlwaysVisible: true,
      headerTemplate: 'views/header-template.html',
      category: [{name: 'People', visible: true},
      {name: 'Year', visible: true},{name: 'Extra1', visible: true},{name: 'Extra2', visible: true}],
      enableGridMenu: true,
      enableSorting: false,
      multiSelect: true,
      columnDefs: [
        {name: 'gender', category:'People', grouping: { groupPriority: 0 }, width: 100, enableColumnMenu: false},
        {name:'name', category:"People", width: 100, enableColumnMenu: false},
        {name:'title', category:"People", width: 100, enableColumnMenu: false},
        {name:'age', category:'Year', width: 50, enableColumnMenu: false},
        {name:'annee', category:'Year', width: 50, enableColumnMenu: false},
        {name:'No Cat',  width: 50, enableColumnMenu: false},
        {name:'extra1', category:'Extra1', width: 75, enableColumnMenu: false},
        {name:'extra3', category:'Extra1', width: 75, enableColumnMenu: false},
        {name:'extra2', category:'Extra2', width: 75, enableColumnMenu: false}
        ],
      data: [
        { gender: 'Male', name: 'Bob', title: 'CEO', age : '14', annee:'1' },
        { gender: 'Male', name: 'Frank', title: 'Lowly Developer', age: '16', annee:'2' },
        { gender: 'Female', name: 'Catherine', title: 'Developer', age: '27', annee:'2' },
        { gender: 'Female', name: 'Jessica', title: 'Engineer', age: '35', annee:'3' }
      ],
      onRegisterApi: function( gridApi ) {
        $scope.main.gridApi = gridApi;
        $scope.mySelectedRows = $scope.main.gridApi.selection.getSelectedRows();
          gridApi.selection.on.rowSelectionChanged($scope, function(row) {
              var index = $scope.selected.indexOf(row.entity.name);
              console.log(index);
              if ( index != -1){
                 $scope.selected.splice(index,1);
               } else{
                 $scope.selected.push(row.entity.name);
               };
              console.log($scope.selected);
          });
      }
    };

    //collapse panel
    $(".left").click(function () {
      $(".panel").css("width","1px");
      $(".left").hide();
      $(".right").show();
    });

    $(".right").click(function () {
      $(".panel").css("width","auto");
      $(".right").hide();
      $(".left").show();
    });
});


// Contrôleur de base associé à home.html
angular.module('rgv').controller('appCtrl',
    function ($scope,$rootScope, $log, Auth, User, Dataset, $cookieStore, $location) {
        $scope.msg = null;

        // carousel boostrap. Ajouter images et textes dans slides
        $scope.myInterval = 3000;
        $scope.slides = [
          {
            image: 'images/slide1.png',
            text: 'Display your reprogenomics data in RGV',
            id:1
          },
          {
            image: 'images/slide2.png',
            text: 'Convert your own files to use them in RGV',
            id:2
          },
          {
            image: 'images/slide3.jpg',
            text: 'Say: Hello Fred',
            id:3
          },
        ];
        //End carousel

        var user = Auth.getUser();


        //Get Users ip for admin part
        $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
          console.log(JSON.stringify(data, null, 2));
        });


        //Récupération news from local json file
        Dataset.news_feed().$promise.then(function(news){
    			console.log(news);
          if(news.status != 1){
            $scope.newsfeed = news.data["news_list"];
            console.log($scope.newsfeed);
          }
          else {
            $scope.msg = news.msg;
          };
    		});


        if(user === null || user === undefined) {
            User.is_authenticated({},{}).$promise.then(function(data){
                $rootScope.$broadcast('loginCtrl.login', data);
                Auth.setUser(data);
            });

        }
});

// Dans barre "query" permet de faire une recherche, pas encore implémenté dans RGV
angular.module('rgv').controller('queryCtrl',
    function ($scope,$rootScope, Auth, User, Search, $filter, ngTableParams) {
});

// Faire advanced research
angular.module('rgv').controller('searchCtrl',
    function($scope, $rootScope, $routeParams, $log, $location, $window, User, Auth, SearchHits) {
        var hits = SearchHits.getHits();
        console.log(hits)
        $scope.nb_match = hits.hits.total
        $scope.search_result = hits.hits.hits;
});

// Contrôleur dédié aux fonctions pour se logger
angular.module('rgv').controller('loginCtrl',
    function ($scope, $rootScope, $routeParams, $log, $location, $window, User, Auth, $cookieStore) {
        $scope.msg = null;

      var params = $location.search();

      if(params['action'] !== undefined && params['action'] == 'confirm_email') {
          User.confirm_email({}, {'token': params['token']}).$promise.then(function(data){
              $scope.msg = data['msg'];
          });
      }
      else if(params['token'] !== undefined) {
          User.is_authenticated({},{'token': params['token']}).$promise.then(function(data){
              $rootScope.$broadcast('loginCtrl.login', data);
              Auth.setUser(data);
              $window.sessionStorage.token = params['token'];
              $location.search('token', null);
              $location.path('');
          });
      }

      $scope.remember = function(){
        $cookieStore.put('remember','1');
      }

      $scope.recover = function() {
        User.recover({},{'user_name': $scope.user_name}).$promise.then(function(data){
            $scope.msg = data.msg;
        });
      }

      $scope.login = function() {

          User.login({},{'user_name': $scope.user_name, 'user_password': $scope.user_password}).$promise.then(function(data){
              if(data.token !== undefined){
                 User.is_authenticated({},{'token': data.token}).$promise.then(function(data){
                     $rootScope.$broadcast('loginCtrl.login', data);
                     Auth.setUser(data);
                     $window.sessionStorage.token = data.token;
                     $location.search('token', null);
                     $location.path('');
                 });
              }
              else {
                  $scope.msg = data.msg;
              }
          });
    };
});

// Contrôleur dédié à la registration
angular.module('rgv').controller('signinCtrl',
    function ($scope,$rootScope, $log, Auth, User,$location) {
        $scope.msg = null;

        $scope.register = function(){
        ////console.log("REGISTER");
          if($scope.register_laboratory === null || $scope.register_laboratory == ''){
              $scope.register_laboratory = 'No laboratory';
          }
          if($scope.register_country === null || $scope.register_country == ''){
              $scope.register_country = 'No country';
          }
          if($scope.register_address === null || $scope.register_address == ''){
              $scope.register_address = 'No address';
          }
          if($scope.register_email === null || $scope.register_email == ''){
              $scope.msg = 'User email is empty and must be a valid email address';
          }
          if($scope.register_email === null || $scope.register_email == ''){
              $scope.msg = 'User email is empty and must be a valid email address';
          }
          else if($scope.register_firstname === null || $scope.register_firstname == ''){
              $scope.msg = 'User first name is empty';
          }
          else if($scope.register_lastname === null || $scope.register_lastname == ''){
              $scope.msg = 'User last name is empty';
          }
          else if($scope.register_check_password === null || $scope.register_check_password == '' || $scope.register_check_password != $scope.register_password){
              $scope.msg = 'Passwords do not match';
          }
          else {
              User.register({},{'user_name': $scope.register_email,
                                  'user_password':$scope.register_password,
                                  'first_name': $scope.register_firstname,
                                  'last_name': $scope.register_lastname,
                                  'country':$scope.register_country,
                                  'laboratory': $scope.register_laboratory,
                                  'address': $scope.register_address,
                              }).$promise.then(function(data){
                  $scope.msg = data['msg'];
              });
          }
      }
});

// Contrôleur pour retrouver mot de passe
angular.module('rgv').controller('recoverCtrl',
  function($scope, $rootScope, $routeParams, $log, $location, $window, User, Auth) {
    var params = $location.search();
    $scope.check_password = null;
    $scope.password = null;
    $scope.recover = function(){
        if(params['token'] !== undefined) {
            if($scope.check_password === null || $scope.check_password == '' || $scope.check_password != $scope.password){
                $scope.msg = 'Passwords do not match';
            }
            else {
                User.confirm_recover({},{ 'token': params['token'],'user_password': $scope.password}).$promise.then(function(data){
                    $location.path('/login');
                });
            }
        }
        else {
            $scope.msg = 'Invalid token confirmation';
        }
    };
 });

// Contrôleur pour affichage des informations d'un user
angular.module('rgv').controller('userInfoCtrl',
    function ($scope, $rootScope, $routeParams, $location, Auth, User) {
        $scope.user = null;

        $scope.projects=[];
        $scope.studies=[];
        $scope.signatures=[];
        $scope.assays=[];

        User.get({'uid': $routeParams['id']}).$promise.then(function(data){
            $scope.user = data;
        });

        $scope.update = function() {
            if($scope.user != null) {
                $scope.user.$save({'uid': $routeParams['id']}).then(function(data){
                    $scope.user = data;
                });
            }
        }
      $scope.auth_user = Auth.getUser();

});

// Service (pas contrôleur) d'identification
angular.module('rgv').service('Auth', function() {
    var user =null;
    return {
        getUser: function() {
            return user;
        },
        setUser: function(newUser) {
            user = newUser;
        },
        isConnected: function() {
            return !!user;
        }
    };
});

// Service (pas un contrôleur) pour les recherches
angular.module('rgv').service('SearchHits', function() {
    var hits =null;
    return {
        getHits: function() {
            return hits;
        },
        setHits: function(results) {
            hits = results;
        }
    };
});
