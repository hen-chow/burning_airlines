var App = App || {}

App.ReservationView = Backbone.View.extend({
  el: "#main",

  events: {
    "click td": "createConfirmation" //"createConfirmation"
  },

  render: function () {
    $("#main").html("");
    $("#results").html("");
      App.flightDetail = this.collection.flights.models.filter(function(flight){
      return flight.get("id").toString() === App.id
    });

    var template = _.template($("#reservationsTemplate").html());
    this.$el.html(template({results: App.flightDetail}));

    var view = new App.ReservationsListView({collection: this.collection});
    view.render();

  },

  createConfirmation: function(e){ // create confirmation window
    // var flight_id = App.id;
    var column = $(e.currentTarget).index() - 1;
    var row = $(e.currentTarget).parent().index(); //String.fromCharCode(65 + ())

    App.router.navigate("confirmation/" + column + "/" + row + "/", {trigger: true});

    // var new_reservation = new App.Reservation ({flight_id: flight_id, row: row, column: column })
    // new_reservation.save();

    // this.collection.reservations.create({flight_id: flight_id, row: row, column: column});

    // App.Reservations.add( r );

    // this.render();
    // var seats = this.seatArray;
    // seats[x][y] = user; // updating the seatArray
    // return seats;
  }

});
