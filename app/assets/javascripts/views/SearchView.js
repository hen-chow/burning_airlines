var App = App || {}

App.SearchView = Backbone.View.extend({
  el: "#main",
  events: {
    "click #search_flight": "show",
    "click #save_search": "doSearch",
    "click #cancel_search": "cancel"
  },
  render: function (){
    this.$el.html($("#searchFlightTemplate").html());
    // var view = new App.AirplanesListView({collection: this.collection});
    // view.render();
    // this.$el.html($("#seatTemplate").html());
  },

  show: function(){
    $("#search_form").css("display", "inline");
  },

  doSearch: function (){
    var departure = $("#departure").val();
    var arrival = $("#arrival").val();
    App.router.navigate("search/" + departure + "/" + arrival + "/", {trigger: true});
  },

  cancel: function(){
    $("#search_form input").val("");
  }

});
