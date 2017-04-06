var App = App || {}

App.ReservationView = Backbone.View.extend({
  el: "#main",

  events: {
    "click td": "createReservation"
  },

  render: function () {

    $("#results").html("");
    App.flightDetail = this.collection.flights.models.filter(function(flight){
      return flight.get("id").toString() === App.id
    });

    var template = _.template($("#reservationsTemplate").html());
    // this.$el
    this.$el.html(template({results: App.flightDetail}));

    var view = new App.ReservationsListView({collection: this.collection});
    view.render();

  },

  createSeatArray: function(row, column){
    var rowArray = Array(row).fill("");
    var seatArray = _.map(rowArray, function(num){
      return num = Array(column).fill("")
    });
    return seatArray
  },

  createReservation: function(e){ //update seatArray with this function, create reservation in backend
    var flight_id = App.id;
    var column = $(e.currentTarget).index() - 1;
    var row = $(e.currentTarget).parent().index();

    // var new_reservation = new App.Reservation ({flight_id: flight_id, row: row, column: column })
    // new_reservation.save();

    this.collection.reservations.create({flight_id: flight_id, row: row, column: column});

    // App.Reservations.add( r );


    // this.render();
    // var seats = this.seatArray;
    // seats[x][y] = user; // updating the seatArray
    // return seats;
  }
});
