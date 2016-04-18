import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('appointments', function() {
<<<<<<< HEAD
    this.route('appointment', { path: '/:appointment_id'});
=======
    this.route('appointment', { path: '/:appointment_id' });
>>>>>>> ed13648cb7dc43b07262c6c877a282dc90987058
  });
});

export default Router;
