var App = App || {}


App.SearchResultsView = Backbone.View.extend({
  el: "#results",
  initialize: function(options){
    this.listenTo(options.collection, "change sync", this.render);
  },

  render: function (options) {
    var searchResults = this.collection.flights.models.filter(function(flight){
      return flight.get('departure') === options.departure && flight.get('arrival') === options.arrival;
    });

    console.log(searchResults);

    var template = _.template($("#searchResultsTemplate").html());
    // this.$el
    this.$el.html(template({results: searchResults}));
  }
  // doReserve: function(e){
  //   var id = $(e.currentTarget).attr("href");
  //   App.router.navigate("flight/" + id + "/", {trigger: true});
  //
  // },
  //
  // showFlight: function(e){
  //   App.id = $(e.currentTarget).attr("id");
  //
  //   App.router.navigate("flight/" + App.id + "/", {trigger: true});

});
