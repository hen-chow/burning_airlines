_.templateSettings = {
    interpolate : /\{\{=(.+?)\}\}/g,
    evaluate : /\{\{(.+?)\}\}/g
  };

App.router = new App.Router();
App.airplanes = new App.Airplanes();
App.flights = new App.Flights();
App.reservations = new App.Reservations();

$(document).ready(function(){

  App.airplanes.fetch().done();
  App.flights.fetch().done();
  App.reservations.fetch().done(function(data){
    Backbone.history.start();
  })

  // setInterval(function(){
  //   App.secrets.fetch();
  // }, 2000);
})
