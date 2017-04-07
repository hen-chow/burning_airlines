var App = App || {}

App.ReservationView = Backbone.View.extend({
  el: "#main",

  events: {
    "click td": "createConfirmation" //"createConfirmation"
  },

  render: function (options) {

    $("#main").html("");
    $("#results").html("");
      var flightDetail = this.collection.flights.models.filter(function(flight){
      return flight.get("id").toString() === options.flight_id
    });
    var template = _.template($("#reservationsTemplate").html());
    this.$el.html(template({results: flightDetail}));

    var view = new App.ReservationsListView({collection: this.collection});
    view.render({flightDetail: flightDetail, flight_id: options.flight_id});

  },

  createConfirmation: function(e){ // create confirmation window
    console.log( this.id);
    var flight_id = this.id;
    var flightDetail = this.collection.flights.models.filter(function(flight){
    return flight.get("id").toString() === flight_id
  });
    var column = $(e.currentTarget).index();
    var r = $(e.currentTarget).parent().index(); //String.fromCharCode(65 + ())
    var row = String.fromCharCode(65 + r);

    var view = new App.ConfirmationView({collection: this.collection, id: this.id});
    view.render({column: column, row: row, flightDetail: flightDetail});
    // var template = _.template($("#confirmationTemplate").html());
    // this.$el.html(template({model: flightDetail, column: column, row: row}));

    // App.router.navigate("confirmation/" + id + "/" + column + "/" + row + "/", {trigger: true});

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
