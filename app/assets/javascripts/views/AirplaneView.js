var App = App || {}

App.AirplaneView = Backbone.View.extend({
  el: "#main",

  render: function () {

    var view = this.$el.html($("#createPlaneTemplate").html());
    // view.render();
  }

});
