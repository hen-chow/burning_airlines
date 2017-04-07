var App = App || {}

App.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "search/:departure/:arrival/": "searchResults",
    "flight/:flight_id/": "reservation",
    // "confirmation/:id/:column/:row/": "confirmation"
  },

  index: function(){
    var view = new App.SearchView({collection: App.flights});
    view.render();
    // },
    // newFlight: function(){
    //   var view = new App.FlightView({collection: App.flights});
    //   view.render();
  },

  searchResults: function (departure, arrival) {
    var view = new App.SearchResultsView({
      collection: {
        flights: App.flights,
        airplanes: App.airplanes,
        reservations: App.reservations
      }
    });
    view.render({departure: departure, arrival: arrival});

  },

  reservation: function(flight_id){
    var view = new App.ReservationView({
      collection: {
        flights: App.flights,
        reservations: App.reservations
      },
      id: flight_id
    });
    view.render({flight_id: flight_id});
  },

  confirmation: function(column, row){
    var view = new App.ConfirmationView({model: App.flightDetail, id: id});
    view.render({column: column, row: row});
  }

})
