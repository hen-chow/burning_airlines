_.templateSettings = {
    interpolate : /\{\{=(.+?)\}\}/g,
    evaluate : /\{\{(.+?)\}\}/g
  };

App.airplanes = new App.Airplanes();
App.flights = new App.Flights();
App.reservations = new App.Reservations();
App.router = new App.Router();

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
