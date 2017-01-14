import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    hello: function(name) {
      console.log("Hello", name);
    },
    drawMap: function(){
      //var map = $("#map_container");
    }
  }
});
