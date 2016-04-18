import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) { // params = {appointment_id: 1}
    return this.store.findRecord('appointment', params.appointment_id);
  }
});
