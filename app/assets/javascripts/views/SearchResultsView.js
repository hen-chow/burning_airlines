var App = App || {}

App.SearchResultsView = Backbone.View.extend({
  el: "#results",
  events: {
    // "click .flightID": "doReserve",
    "click button": "showFlight"
  },
  render: function () {
    App.searchResults = this.collection.models.filter(function(flight){
      return flight.get('departure') === departure.value && flight.get('arrival') === arrival.value;
    });

    console.log(App.searchResults);

    var template = _.template($("#searchResultsTemplate").html());
    this.$el.html(template({results: App.searchResults}));
  },
  // doReserve: function(e){
  //   var id = $(e.currentTarget).attr("href");
  //   App.router.navigate("flight/" + id + "/", {trigger: true});
  //
  // },

  showFlight: function(e){
    App.id = $(e.currentTarget).attr("id");
    App.router.navigate("flight/" + App.id + "/", {trigger: true});

  }

});
