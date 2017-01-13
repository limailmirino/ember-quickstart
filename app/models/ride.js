import DS from 'ember-data';

export default DS.Model.extend({

  title: DS.attr('string', {defaultValue: ""}),
  description: DS.attr('string', {defaultValue: ""}),
  start: DS.attr('date')
});
