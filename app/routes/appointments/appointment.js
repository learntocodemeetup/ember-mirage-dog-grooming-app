import Ember from 'ember';

export default Ember.Route.extend({
<<<<<<< HEAD
  model: function(params) { // params = {appointment_id: 1}
=======
  model: function(params) {
>>>>>>> ed13648cb7dc43b07262c6c877a282dc90987058
    return this.store.findRecord('appointment', params.appointment_id);
  }
});
