var App = App || {}

App.AirplaneView = Backbone.View.extend({
  el: "#main",

  events: {
    "click": "show"
  },

  render: function () {
    this.$el.html($("#createPlaneTemplate").html());
    var view = new App.AirplanesListView({collection: this.collection});
    view.render();

  },

  show: function(){
    $("#plane_form").css("display", "inline");
  }

});
