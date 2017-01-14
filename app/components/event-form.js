/**
 * Created by suci on 14/01/2017.
 */
export default Ember.Component.extend({
  actions: {
    hello: function(name) {
      console.log("Hello", name);
    },
    saveEvent: function(event){
      console.log("Hello", event);
    }
  }
});
