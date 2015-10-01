angular.module("plantilla").controller("createPuesto", function($scope, $meteor, $state, $stateParams)
{
  	
  	
  	$scope.action = true;
    $scope.page = 1;
    $scope.perPage = 3;
  	$scope.sort = { nombre: 1 };
  	

  	$scope.puestos = $meteor.collection(function() {
      	return Puestos.find({}, {
        	sort : $scope.getReactively('sort')
      	});
    });

    $meteor.autorun($scope, function() {
	    $meteor.subscribe('allPuestos', {
	      	limit: parseInt($scope.getReactively('perPage')),
        	skip: (parseInt($scope.getReactively('page')) - 1) * parseInt($scope.getReactively('perPage')),
        	sort: $scope.getReactively('sort')
	    }).then(function(){
	      $scope.puestosCount = $meteor.object(Counts ,'numberOfPuestos', false);
	    });
	});

  	  
  	$scope.nuevaDependencia = function()
  	{
    	$scope.action = true;
    
    	$scope.curso = "";
    	console.log($scope.puestos)
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
    	Session.set("formType",'update');
    	Session.set("selectedCursoId",id);
    	$scope.action = false;
    	$('#nuevo').collapse('show');
	};
	
	
	$scope.cambiarEstatus = function(id)
	{
		var curso = $meteor.object(Cursos, id, false);
		if(curso.estatus == true)
			curso.estatus = false;
		else
			curso.estatus = true;
		
		curso.save();
	};

	$scope.ver = function(id){
		$scope.curso = $meteor.object(Cursos, id, false);
		console.log($scope.curso);
		$state.go("cursoDetails");
	};

	$scope.pageChanged = function(newPage) {
		console.log('hola');
		console.log(newPage);

     	$scope.page = newPage;
    };
	
	
});
	
