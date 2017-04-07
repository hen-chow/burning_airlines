var App = App || {}

App.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "search/:departure/:arrival/": "searchResults",
    "flight/:id/": "reservation"
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
    var view = new App.SearchResultsView({
      departure: departure,
      arrival: arrival,
      collection: {
        flights: App.flights,
        airplanes: App.airplanes,
        reservations: App.reservations
      }
    });
    view.render();
  },

  reservation: function(){
    var view = new App.ReservationView({
      collection: {
        flights: App.flights,
        reservations: App.reservations
      },
      id: App.id
    });
    view.render();
  }
})
