angular.module("plantilla").config(function($urlRouterProvider, $stateProvider, $locationProvider)
{
	$locationProvider.html5Mode(true);
  	$stateProvider
      .state('createPuesto', {
        url: '/puesto/create',
        templateUrl: 'client/puesto/views/create.ng.html',
        controller: 'createPuesto',
      })
      .state('createDependencia', {
        url: '/dependencia/create',
        templateUrl: 'client/dependencia/views/create.ng.html',
        controller: 'createDependencia',
      })
      .state('viewDependencia', {
        url: '/dependencia/:dependenciaId',
        templateUrl: 'client/dependencia/views/view.ng.html',
        controller: 'viewDependencia',
      })
      .state('createSubdependencia', {
        url: '/subdependencia/create',
        templateUrl: 'client/subdependencia/views/create.ng.html',
        controller: 'createSubdependencia',
      })
      .state('viewSubdependencia', {
        url: '/subdependencia/:subdependenciaId',
        templateUrl: 'client/subdependencia/views/view.ng.html',
        controller: 'viewSubdependencia',
      })
      .state('principal', {
        url: '/',
       // templateUrl: 'client/principal/views/index.ng.html',
        //controller: 'PrincipalCtrl',
      });
  	$urlRouterProvider.otherwise('/');
})