import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //this.route('scientists');

  this.route('events', {
    path : '/events'
  }, function(){

    // Nested routes example: admin/events
    this.route('list');

    this.route('new');

    this.route('search');
    this.route('show', { path: '/show/:event_id' });

  });
  this.route('rides', {
    path : '/rides'
  }, function(){
    this.route('list');
  });

});

export default Router;
