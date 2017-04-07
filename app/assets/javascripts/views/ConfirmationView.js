var App = App || {}

App.ConfirmationView = Backbone.View.extend({
  el: "#confirmation",

  events: {
    "click #confirmation_button": "createReservation"
  },

  render: function (options) {
    // $("#seatPlan").html("");
    var template = _.template($("#confirmationTemplate").html());
    this.$el.html(template({model: options.flightDetail, column: options.column, row: options.row}));
  },

  createReservation: function(e){ // create reservation in backend
    var flight_id = this.id;
    var column = $("#confirmation_button").attr("col");
    var row = $("#confirmation_button").attr("row");

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
