var App = App || {}

App.ReservationView = Backbone.View.extend({
  el: "#main",
  initialize: function(options){
    this.listenTo(App.reservations, "change sync", this.render);
  },
  // events: {
    // "click .flightID": "doReserve"
  // },
  render: function () {
    $("#results").html("");
    App.flightDetail = this.collection.models.filter(function(flight){
      return flight.get("id").toString() === App.id
    });

    console.log(App.flightDetail);

    var template = _.template($("#reservationsTemplate").html());
    // this.$el
    this.$el.html(template({results: App.flightDetail}));


    var airplaneID = App.flightDetail[0].attributes.airplane_id
    var name = _.findWhere(App.airplanes.models, {id: airplaneID}).attributes.name
    var rows = _.findWhere(App.airplanes.models, {id: airplaneID}).attributes.row
    var cols = _.findWhere(App.airplanes.models, {id: airplaneID}).attributes.column
    var seatPlan = $("#seatPlan");
    var table = $("<table>");

    seatPlan.append(table);
    table.append("<caption>" + name + " - " + "rows: " + rows + ", cols: " + cols + "</caption>");

    for(var r = 0; r < rows; r++) {
      var tr = $("<tr>");
      var chr = String.fromCharCode(65 + r);
      $("<th>" + chr + "</th>").appendTo(tr);
      for (var c = 0; c < cols; c++) {
        $("<td>" + parseInt(c + 1) + "</td>").appendTo(tr);
        // if (c % 3 == 0) {
        //   $("tr").css({
        //     marginTop: "20px"
        //   });
        // }
      }
      // $("<th>" + (c+1) + "</th>").appendTo(table);
      tr.appendTo(table);
    }

    $("caption").css("text-align", "left");
    $("table").css("margin", "100px auto");
    $("td").css({
      border: "solid 1px black",
      padding: "10px"
    });
  },

  createSeatArray: function(row, column){
    var rowArray = Array(row).fill("");
    App.seatArray = _.map(rowArray, function(num){
      return num = Array(column).fill("")
    });
    return App.seatArray
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
