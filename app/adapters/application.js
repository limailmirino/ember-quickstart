import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  //namespace: 'api',

	// Port 3000 work with Rails as a back-end
	//host: 'http://localhost:3000',

	// Port 1337 work with Sails as a back-end
	host: 'http://localhost:1337',
	primaryKey: '_id'
	/*
  buildURL: function(modelName, id, snapshot, requestType, query) {
        var url = this._super(modelName, id, snapshot, requestType, query);
        return url + ".json";
  },
  */
	/*
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
	/*
  createRecord: function(store, type, snapshot){
    var promise = this._super(store, type, snapshot);
    console.log("Saving an item via POST");
    return promise;
  }
  */
});
