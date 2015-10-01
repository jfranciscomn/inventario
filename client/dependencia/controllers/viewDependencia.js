angular.module("plantilla").controller("viewDependencia", function($scope, $meteor, $state, $stateParams)
{
	
	$meteor.collection(Dependencias).subscribe('dependenciaByProto',{_id:$stateParams.dependenciaId});
	$scope.dependencia=$meteor.object(Dependencias, $stateParams.dependenciaId, false);
	
	$scope.action = true;
    $scope.page = 1;
    $scope.perPage = 10;
  	$scope.sort = { nombre: 1 };
  	

  	$scope.subdependencias = $meteor.collection(function() {
      	return Subdependencias.find({}, {
        	sort : $scope.getReactively('sort')
      	});
    });

    $meteor.autorun($scope, function() {
	    $meteor.subscribe('subdependenciasByProto',{dependencia_id:$stateParams.dependenciaId}, {
	      	limit: parseInt($scope.getReactively('perPage')),
        	skip: (parseInt($scope.getReactively('page')) - 1) * parseInt($scope.getReactively('perPage')),
        	sort: $scope.getReactively('sort')
	    }).then(function(){
	      $scope.subdependenciasCount = $meteor.object(Counts ,'numberOfDependenciasByProto', false);
	    });
	});

	$scope.nuevaSubdependencia = function()
  	{
    	$scope.action = true;
    	$scope.curso = "";
  	};

  	$scope.guardar = function(subdependencia)
	{
		console.log(subdependencia);
		console.log($scope.subdependencias);
		$scope.subdependencia.estatus = true;
		$scope.subdependencia.dependencia_id = $stateParams.dependenciaId;
		$scope.subdependencias.push(subdependencia);
		$scope.subdependencia = "";
	};
	
	$scope.editar = function(id)
	{

    	/*$scope.curso = $meteor.object(Cursos, id, false);*/
    	$scope.subdependencia = $meteor.object(Subdependencias, id, false);
    	$scope.action = false;
    	$('#nuevo').collapse('show');
	};

	$scope.cambiarEstatus = function(id)
	{
		var subdependencia = $meteor.object(Subdependencias, id, false);
		if(subdependencia.estatus == true)
			subdependencia.estatus = false;
		else
			subdependencia.estatus = true;
		
		subdependencia.save();
	};
	$scope.actualizar = function(subdependencia)
	{
		$scope.subdependencia.save();
		$scope.action = true;
		$scope.subdependencia = "";		
	};

	

	$scope.pageChanged = function(newPage) {
     	$scope.page = newPage;
    };


});