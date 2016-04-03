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
      
      record.save();

      this.transitionTo('appointments.appointment', appointment);

    },

  },

  model() {
    return {};
  }

});
