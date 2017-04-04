var App = App || {}

App.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "flights": "newFlight"
  },
  index: function(){
    var view = new App.AirplaneView({collection: App.airplanes});
    view.render();
  },
  newFlight: function(){
    var view = new App.FlightView({collection: App.flights});
    view.render();
  }
})
