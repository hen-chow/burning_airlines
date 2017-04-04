var App = App || {}

App.FlightView = Backbone.View.extend({
  el: "#main",
  events: {
    "click #new_flight": "show"
  },
  render: function(){
    this.$el.html($("#createFlightTemplate").html());
  },
  show: function(){
    console.log("Flight View clicked");
  }

});
