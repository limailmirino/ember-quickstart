import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    saveEvent : function() {

      var event  = this.get('model');

      console.log("Creating a new event from route");
      console.log("Event title: " + event.get('title'));
      console.log("event description: " + event.get('description'));

      event.save().then(function() {
        console.log("Store saved to back-end");

      }).catch(function(reason) {

        console.log(reason);
      });

      //this.transitionTo('events.list');
    }
  }
});
