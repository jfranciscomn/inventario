Meteor.publish("direccionesByProto",function(proto,options){
	Counts.publish(this, 'numberOfDireccionByProto', 
		Direcciones.find(proto), { noReady: true });
  	return Direcciones.find(proto,options);
	
});