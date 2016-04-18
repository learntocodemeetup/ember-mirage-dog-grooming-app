import DS from 'ember-data';

export default DS.Model.extend({
  ownerName: DS.attr('string'),
  suburb: DS.attr('string'),
  appointmentTime: DS.attr('date'),
  dogBreed: DS.attr('string'),
  dogName: DS.attr('string'),
  dogSize: DS.attr('string'), 
});