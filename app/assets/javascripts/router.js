var App = App || {}

App.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "search/:departure/:arrival/": "searchResults",
    "flight/:id": "reservation"
    // "flights": "newFlight"
    // "/admin/airplanes": "createAirplanes"
  },
  // createAirplanes: function(){
  //   var view = new App.AirplaneView({collection: App.airplanes});
  //   view.render();
  // },
  index: function(){
    var view = new App.SearchView({collection: App.flights});
    view.render();
    // },
    // newFlight: function(){
    //   var view = new App.FlightView({collection: App.flights});
    //   view.render();
  },

  searchResults: function () {
    var view = new App.SearchResultsView({departure: departure, arrival: arrival, collection: App.flights});
    view.render();
  },

  reservation: function(){
    alert("make a reservation")
  }
})
