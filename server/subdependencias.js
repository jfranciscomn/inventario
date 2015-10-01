
Meteor.publish("subdependenciasByProto",function(proto,options){
	Counts.publish(this, 'numberOfDependenciasByProto', 
		Subdependencias.find(proto), { noReady: true });
  	return Subdependencias.find(proto,options);
	
});

Meteor.publish("subdependenciaByProto",function(options){
	return Subdependencias.find(options);
});