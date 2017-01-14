import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    saveEvent : function() {

      var event  = this.get('model');

      console.log("Creating a new event from route");
      //console.log("Event title: " + event.get('title'));
      //console.log("event description: " + event.get('description'));

      var self = this;

      function transitionToEvent(event) {
        console.log("OK");
        self.transitionToRoute('events.show', event);
      }
      function failure(reason) {
        console.log("Problemi durante il salvataggio")
      }
      var promise = event.save()
        .then(transitionToEvent)
        .catch(failure);
    }
  }
});
