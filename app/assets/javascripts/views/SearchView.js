var App = App || {}

App.SearchView = Backbone.View.extend({
  el: "#main",
  events: {
    "click #search_flight": "show",
    "click #save_search": "save",
    "click #cancel_search": "cancel"
  },
  render: function () {
    this.$el.html($("#searchFlightTemplate").html());
    // var view = new App.AirplanesListView({collection: this.collection});
    // view.render();
    // this.$el.html($("#seatTemplate").html());

  },

  show: function(){
    $("#search_form").css("display", "inline");
  },

  save: function(){
    var $departure = $("#departure").val();
    var $arrival = $("#arrival").val();
    // var searchResults = {};
    // if ($departure === ) {
    for (var i = 0; i < App.flights.models.length; i++) {

      if($departure === App.flights.models[i].attributes.departure || $arrival === App.flights.models[i].attributes.arrival){
      var searchResult = App.flights.models[i].attributes;
      $("#search_results").append(html($("<p>" + searchResult.date + " " + searchResult.number + " " + searchResult.departure + " " + searchResult.arrival + "</p>")));

      }

    }


  },

  cancel: function(){
    $("#search_form input").val("");
  }

});
