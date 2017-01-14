import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('ride');
    //return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }

});
