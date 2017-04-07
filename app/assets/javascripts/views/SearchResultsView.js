var App = App || {}

App.SearchResultsView = Backbone.View.extend({
  initialize: function(options){
    this.listenTo(options.collection, "change sync", this.render);
  },
  el: "#results",
  // events: {
  //   "click button": "showFlight"
  // },
  render: function (options) {
    var searchResults = this.collection.models.filter(function(flight){
      return flight.get('departure') === options.departure && flight.get('arrival') === options.arrival;
    });
    var template = _.template($("#searchResultsTemplate").html());
    this.$el.html(template({results: searchResults}));
  }

  // showFlight: function(e){
  //   App.id = $(e.currentTarget).attr("id");
  //
  //   App.router.navigate("flight/" + App.id + "/", {trigger: true});
  //
  // }

});
