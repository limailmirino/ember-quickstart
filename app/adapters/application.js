import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  //namespace: 'api',
  host: 'http://localhost:3000',
  /*
  buildURL: function(modelName, id, snapshot, requestType, query) {
        var url = this._super(modelName, id, snapshot, requestType, query);
        return url + ".json";
  }
  */
/*
  ,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
/*
  ,
  createRecord: function(store, type, snapshot){
    var promise = this._super(store, type, snapshot);
    console.log("Saving an item via POST");
    return promise;
  }
  */
});
