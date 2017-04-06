var App = App || {}

App.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "search/:departure/:arrival/": "searchResults",
    "flight/:id/": "reservation"
    // "confirmation/:column/:row/": "confirmation"

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
    var view = new App.SearchResultsView({departure: departure, arrival: arrival, collection: App.flights});
    view.render();
  },

  reservation: function(id){
    var view = new App.ReservationView({
      collection: {
        flights: App.flights,
        reservations: App.reservations
      },
      id: App.id
    });
    view.render();
  // },
  // 
  // confirmation: function(column, row){
  //   var view = new App.ConfirmationView({results: App.flightDetail, column: column, row: row});
  //   view.render();
  }

})
