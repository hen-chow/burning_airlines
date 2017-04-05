var App = App || {}

App.ReservationView = Backbone.View.extend({
  el: "#main",
  // events: {
    // "click .flightID": "doReserve"
  // },
  render: function () {
    // $("#result").html("");
    App.reservations = this.collection.models.filter(function(flight){
      return flight.get("id").toString() === App.id
    });

    console.log(App.reservations);

    var template = _.template($("#reservationsTemplate").html());
    // this.$el
    this.$el.html(template({results: App.reservations}));
  },

  createSeatArray: function(row, column){
    var rowArray = Array(row).fill("");
    App.seatArray = _.map(rowArray, function(num){
      return num = Array(5).fill("")
    });
  },

  createReservation: function(user, x, y){ //update seatArray with this function, create reservation in backend
    var user_id; //= this.$el.find("input").val();
    var flight_id;

    var reservation = new App.Reservation({ user_id: user_id, flight_id: flight_id })
    reservation.save();
    // this.collection.create({ user_id: user_id, flight_id: flight_id });

    // this.$el.find("input").val("").focus();

    var seats = App.seatArray;
    seats[x][y] = user; // updating the seatArray
    return seats;
  }

});
