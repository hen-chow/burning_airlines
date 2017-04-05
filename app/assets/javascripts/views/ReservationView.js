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
  }
  // doReserve: function(e){
  //   var id = $(e.currentTarget).attr("href");
  //   App.router.navigate("flight/" + id, {trigger: true});
  //
  // }

});
