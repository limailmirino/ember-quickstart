import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    return this.store.createRecord('event');
    //return this.store.modelFor('event');
  },
  setupController: function(controller, model){
    controller.set('content', model);
  }


});
