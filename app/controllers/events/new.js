import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    save : function(form) {

      console.log("Creating a new event from route");
      console.log("Event title: " + form.get('title'));
      console.log("event description: " + form.get('description'));

      form.save().then(function() {

        console.log("Promessa mantenuta");
        //transitionTo('events.list');

      }).catch(function(reason) {

        console.log(reason);
        throw reason;

      });
    }
  }
});
