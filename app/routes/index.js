import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createAppointment(appointment) {

      var record = this.store.createRecord('appointment', {
        ownerName: appointment.ownerName,
        suburb: appointment.suburb,
        appointmentTime: appointment.appointmentTime,
        dogBreed: appointment.dogBreed,
        dogName: appointment.dogName,
        dogSize: appointment.dogSize
      });
      

      var self = this;

      // When you do record.save it sends a post request to /api/appointments

      return record.save().then(function(appointment) {
        console.log('the id is:', appointment.id);
        self.transitionTo('appointments.appointment', appointment);
      }); 

      // POST /api/appointments with the object 
    },

  },

  model() {
    return {};
  }

});


