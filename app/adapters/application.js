import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  //namespace: 'api',
  host: 'http://localhost:8765',
  buildURL: function(modelName, id, snapshot, requestType, query) {
        var url = this._super(modelName, id, snapshot, requestType, query);
        return url + ".json";
  }
});
