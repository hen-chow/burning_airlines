var App = App || {}

App.Router = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  index: function(){
    var view = new App.AirplaneView({collection: App.airplanes});
    view.render();
  }
})
