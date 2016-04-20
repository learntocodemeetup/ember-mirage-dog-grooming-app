export default function() {


  this.namespace = 'api';

  this.get('/appointments');
  this.get('/appointments/:id');  
  this.post('/appointments');

}

// GET /api/appointments

