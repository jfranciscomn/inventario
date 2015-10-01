angular.module("plantilla").controller("createDependencia", function($scope, $meteor, $state, $stateParams)
{
  	
  	
  	$scope.action = true;
    $scope.page = 1;
    $scope.perPage = 10;
  	$scope.sort = { nombre: 1 };
  	

  	$scope.dependencias = $meteor.collection(function() {
      	return Dependencias.find({}, {
        	sort : $scope.getReactively('sort')
      	});
    });

    $meteor.autorun($scope, function() {
	    $meteor.subscribe('allDependencias', {
	      	limit: parseInt($scope.getReactively('perPage')),
        	skip: (parseInt($scope.getReactively('page')) - 1) * parseInt($scope.getReactively('perPage')),
        	sort: $scope.getReactively('sort')
	    }).then(function(){
	      $scope.dependenciasCount = $meteor.object(Counts ,'numberOfDependencias', false);
	    });
	});

  	  
  	$scope.nuevaDependencia = function()
  	{
    	$scope.action = true;
    
    	$scope.curso = "";
    	
  	};

  	$scope.guardar = function(dependencia)
	{
		$scope.dependencia.estatus = true;
		$scope.dependencias.push(dependencia);
		$scope.dependencia = "";
	};
	
	$scope.editar = function(id)
	{

    	/*$scope.curso = $meteor.object(Cursos, id, false);*/
    	$scope.dependencia = $meteor.object(Dependencias, id, false);
    	$scope.action = false;
    	$('#nuevo').collapse('show');
	};
	
	
	$scope.cambiarEstatus = function(id)
	{
		var dependencia = $meteor.object(Dependencias, id, false);
		if(dependencia.estatus == true)
			dependencia.estatus = false;
		else
			dependencia.estatus = true;
		
		dependencia.save();
	};
	$scope.actualizar = function(dependencia)
	{
		$scope.dependencia.save();
		$scope.action = true;
		$scope.dependencia = "";		
	};


	$scope.pageChanged = function(newPage) {
		$scope.page = newPage;
    };
	
	
});
	
