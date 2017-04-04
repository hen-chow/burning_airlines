_.templateSettings = {
    interpolate : /\{\{=(.+?)\}\}/g,
    evaluate : /\{\{(.+?)\}\}/g
  };


$(document).ready(function(){

  App.router = new App.Router();
  App.airplanes = new App.Airplanes();
  
  App.airplanes.fetch().done(function(data){
    Backbone.history.start();
  })

  // setInterval(function(){
  //   App.secrets.fetch();
  // }, 2000);
})
