var App = App || {}

App.ConfirmationView = Backbone.View.extend({
  el: "#confirmation_container",

  events: {
    "click #confirmation": "createReservation"
  },

  render: function () {

    // $("#seatPlan").html("");
    var template = _.template($("#confirmationTemplate").html());
    this.$el.html(template({results: App.flightDetail}));
  },

  createReservation: function(e){ // create reservation in backend
    var flight_id = App.id;
    var column = $("#confirmation").attr("col");
    var row = $("#confirmation").attr("row")

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
