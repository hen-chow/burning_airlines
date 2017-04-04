_.templateSettings = {
    interpolate : /\{\{=(.+?)\}\}/g,
    evaluate : /\{\{(.+?)\}\}/g
  };

App.router = new App.Router();
App.airplanes = new App.Airplanes();
App.flights = new App.Flights();

$(document).ready(function(){

  App.airplanes.fetch().done();
  App.flights.fetch().done(function(data){
    Backbone.history.start();
  })

  // setInterval(function(){
  //   App.secrets.fetch();
  // }, 2000);
})
