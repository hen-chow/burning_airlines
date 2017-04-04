var App = App || {}

App.AirplaneView = Backbone.View.extend({
  el: "#main",
  events: {
    "click #new_plane": "show",
    "click #save_plane": "save",
    "click #cancel": "cancel"
  },
  render: function () {
    this.$el.html($("#createPlaneTemplate").html());
    // var view = new App.AirplanesListView({collection: this.collection});
    // view.render();
    // this.$el.html($("#seatTemplate").html());

  },

  show: function(){
    $("#plane_form").css("display", "inline");
  },

  save: function(){
    $("#seats").html("");
    var name = $("#plane_name").val();
    var rows = $("#plane_row").val();
    var cols = $("#plane_col").val();
    var seats = $("#seats");
    var table = $("<table>");

    seats.append(table);
    table.append("<caption>" + name + " - " + "rows: " + rows + ", cols: " + cols + "</caption>");

    for(var r = 0; r < rows; r++) {
      var tr = $("<tr>");
      var chr = String.fromCharCode(65 + r);
      $("<th>" + chr + "</th>").appendTo(tr);
      for (var c = 0; c < cols; c++) {
        $("<td>" + parseInt(c + 1) + "</td>").appendTo(tr);
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

  cancel: function(){
    $("#plane_form").css("display", "none");
  }

});
