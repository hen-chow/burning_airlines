var App = App || {}

App.SearchResultsView = Backbone.View.extend({
  el: "#results",
  events: {
    "click .flightID": "doReserve",
    "click button": "showFlight"
  },
  render: function () {
    App.searchResults = this.collection.flights.models.filter(function(flight){
      return flight.get('departure') === departure.value && flight.get('arrival') === arrival.value;
    });

    // App.searchResults2 = this.collection.airplanes.models.filter(function(airplane){
    //   return airplane.get('departure') === departure.value && airplane.get('arrival') === arrival.value;
    // });
    // App.searchResults3 = this.collection.reservations.models.filter(function(reservation){
    //   return reservation.get('departure') === departure.value && reservation.get('arrival') === arrival.value;
    // });

    console.log(App.searchResults);

    var template = _.template($("#searchResultsTemplate").html());
    // this.$el
    this.$el.html(template({results: App.searchResults}));
  },
  doReserve: function(e){
    var id = $(e.currentTarget).attr("href");
    App.router.navigate("flight/" + id + "/", {trigger: true});

  },

  showFlight: function(e){
    App.id = $(e.currentTarget).attr("id");

    App.router.navigate("flight/" + App.id + "/", {trigger: true});

  }

});
