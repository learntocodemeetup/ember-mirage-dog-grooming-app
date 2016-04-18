import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('appointments', function() {
    this.route('appointment', { path: '/:appointment_id'});
  });
});

export default Router;
