angular.module("plantilla").controller("PrincipalCtrl", function($scope, $meteor, $state, $stateParams)
{
	
	$scope.catalogos=[
		{
			'name'	: 'Dependencias',
			'url'	: '/dependencia/create',
			'icon'	: 'fa-university'
		},
		{
			'name'	: 'Subdependencias',
			'url'	: '/subdependencia/create',
			'icon'	: 'fa-university'
		},
		{
			'name'	: 'Direcciones',
			'url'	: '/direccion/create',
			'icon'	: 'fa-university'
		},
		{
			'name'	: 'Departamentos',
			'url'	: '/departamento/create',
			'icon'	: 'fa-group'
		},
		{
			'name'	: 'Puestos',
			'url'	: '/puesto/create',
			'icon'	: 'fa-user'
		},
	];
	
});
