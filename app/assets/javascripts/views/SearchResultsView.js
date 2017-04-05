var App = App || {}

App.SearchResultsView = Backbone.View.extend({
  el: "#results",
  render: function () {
    // console.log(departure);
    // console.log(arrival);
    // console.log(App.flights);
    // console.log(this.collection);
    App.searchResults = this.collection.models.filter(function(flight){
      return flight.get('departure') === departure.value && flight.get('arrival') === arrival.value;
    });

    console.log(App.searchResults);

    // for (var i = 0;   i < App.flights.models.length; i++) {
    //
    //   if($departure === App.flights.models[i].attributes.departure && $arrival === App.flights.models[i].attributes.arrival){
    //     var searchResult = App.flights.models[i].attributes;
    //     // $("#search_results").append(html($("<p>" + searchResult.date + " " + searchResult.number + " " + searchResult.departure + " " + searchResult.arrival + "</p>")));
    //     searchResults.push(searchResult);
    //     console.log(_.indexBy(searchResults, 'id'));
    //   }
    // }

    var template = _.template($("#searchResultsTemplate").html());
    // this.$el
    this.$el.html(template({results: App.searchResults}));
  }

});
