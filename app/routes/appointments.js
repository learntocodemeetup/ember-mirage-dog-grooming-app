import Ember from 'ember';

export default Ember.Route.extend({
<<<<<<< HEAD
  model: function() {
    return this.store.findAll('appointment'); // GET - /api/appointments
  }
=======
	model: function() {
		return this.store.findAll('appointment');
	}	
>>>>>>> ed13648cb7dc43b07262c6c877a282dc90987058
});
