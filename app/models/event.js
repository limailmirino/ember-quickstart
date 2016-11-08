
import DS from 'ember-data';

export default DS.Model.extend({

  title: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  start: DS.attr('date'),
  end: DS.attr('date'),
  picture: DS.attr('string'),
  created: DS.attr('date'),
  updated: DS.attr('date'),
  tags: DS.attr('string')

});
