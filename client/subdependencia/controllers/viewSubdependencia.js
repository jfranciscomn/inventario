angular.module("plantilla").controller("viewSubdependencia", function($scope, $meteor, $state, $stateParams)
{
	
	$meteor.collection(Subdependencias).subscribe('subdependenciaByProto',{_id:$stateParams.subdependenciaId});
	$scope.subdependencia=$meteor.object(Subdependencias, $stateParams.subdependenciaId, false);
	
	$scope.action = true;
    $scope.page = 1;
    $scope.perPage = 10;
  	$scope.sort = { nombre: 1 };
  	

  	$scope.direcciones = $meteor.collection(function() {
      	return Direcciones.find({}, {
        	sort : $scope.getReactively('sort')
      	});
    });

    $meteor.autorun($scope, function() {
	    $meteor.subscribe('direccionesByProto',{subdependencia_id:$stateParams.subdependenciaId}, {
	      	limit: parseInt($scope.getReactively('perPage')),
        	skip: (parseInt($scope.getReactively('page')) - 1) * parseInt($scope.getReactively('perPage')),
        	sort: $scope.getReactively('sort')
	    }).then(function(){
	      $scope.direccionesCount = $meteor.object(Counts ,'numberOfDireccionesByProto', false);
	    });
	});
	

	$scope.nuevaDireccion = function()
  	{
    	$scope.action = true;
    	$scope.curso = "";
  	};

  	$scope.guardar = function(direccion)
	{
		$scope.direccion.estatus = true;
		$scope.direccion.subdependencia_id = $stateParams.subdependenciaId;
		$scope.direccion.dependencia_id = $scope.subdependencia.dependencia_id;
		$scope.direcciones.push(direccion);
		$scope.direccion = "";
	};
	
	$scope.editar = function(id)
	{

    	/*$scope.curso = $meteor.object(Cursos, id, false);*/
    	$scope.direccion = $meteor.object(Direcciones, id, false);
    	$scope.action = false;
    	$('#nuevo').collapse('show');
	};

	$scope.cambiarEstatus = function(id)
	{
		var direccion = $meteor.object(Direcciones, id, false);
		if(direccion.estatus == true)
			direccion.estatus = false;
		else
			direccion.estatus = true;
		
		direccion.save();
	};
	$scope.actualizar = function(direccion)
	{
		$scope.direccion.save();
		$scope.action = true;
		$scope.direccion = "";		
	};

	

	$scope.pageChanged = function(newPage) {
     	$scope.page = newPage;
    };


});