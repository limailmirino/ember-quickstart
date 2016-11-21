import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    saveEvent : function(form) {

      console.log("Creating a new event from route");
      console.log("Event title: " + form.get('title'));
      console.log("event description: " + form.get('description'));

      form.save().then(function() {
        console.log("Store saved to back-end");

      }).catch(function(reason) {

        console.log(reason);
      });

      this.transitionTo('events.list');
    }
  }
});
