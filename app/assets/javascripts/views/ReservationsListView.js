var App = App || {}

App.ReservationsListView = Backbone.View.extend({
  el: "#main",
  initialize: function(options){
    this.listenTo(options.collection.reservations, "change sync", this.render);
  },

  render: function () {
    debugger;
    $("#results").html("");
    App.flightDetail = this.collection.flights.models.filter(function(flight){
      return flight.get("id").toString() === App.id
    });

    var template = _.template($("#reservationsTemplate").html());
    // this.$el
    this.$el.html(template({results: App.flightDetail}));


    var airplaneID = App.flightDetail[0].attributes.airplane_id
    var name = _.findWhere(App.airplanes.models, {id: airplaneID}).attributes.name
    var rows = _.findWhere(App.airplanes.models, {id: airplaneID}).attributes.row
    var cols = _.findWhere(App.airplanes.models, {id: airplaneID}).attributes.column
    var seatPlan = $("#seatPlan");
    var table = $("<table>");

    // var seatArray = this.createSeatArray(rows, cols); // create empty seatArray

    var res = this.collection.reservations.models.filter(function(reservation){ // retrieve reservation information
      return reservation.get("flight_id").toString() === App.id;
    });

    // _.each(res, function(num){ // update seatArray with reservation info
    //   var x = num.get("row")
    //   var y = num.get("column")
    //   seatArray[x][y] = "booked";
    //   return seatArray
    // })


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

    for (var i = 0; i < res.length; i++) {
      res_row = res[i].attributes.row
      res_col = res[i].attributes.column
      $("tr")[res_row].cells[res_col+1].style.backgroundColor = "orange";
    };
  },

  createSeatArray: function(row, column){
    var rowArray = Array(row).fill("");
    var seatArray = _.map(rowArray, function(num){
      return num = Array(column).fill("")
    });
    return seatArray
  }

});
