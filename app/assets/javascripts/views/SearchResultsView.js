var App = App || {}

App.SearchResultsView = Backbone.View.extend({
  initialize: function(options){
    this.listenTo(options.collection, "change sync", this.render);
  },
  el: "#results",
  events: {
    "click button": "showFlight"
  },
  render: function () {
    var searchResults = this.collection.models.filter(function(flight){
      return flight.get('departure') === departure.value && flight.get('arrival') === arrival.value;
    });

    var template = _.template($("#searchResultsTemplate").html());
    this.$el.html(template({results: searchResults}));
  },

  showFlight: function(e){
    App.id = $(e.currentTarget).attr("id");

    App.router.navigate("flight/" + App.id + "/", {trigger: true});

  }

});
