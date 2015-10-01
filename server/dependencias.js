Meteor.publish("allDependencias",function(options){
	
 	Counts.publish(this, 'numberOfDependencias', Dependencias.find({}), { noReady: true });
  	return Dependencias.find({},options);
});

Meteor.publish("dependenciaByProto",function(options){
	return Dependencias.find(options);
});