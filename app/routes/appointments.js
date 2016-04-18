import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('appointment'); // GET - /api/appointments
  }
});
