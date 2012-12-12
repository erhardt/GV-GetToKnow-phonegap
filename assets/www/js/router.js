/**
 * The router decides what to show based on the url being looked at.
 * Basically there is one route for each screen in the application.
 */
var AppRouter = Backbone.Router.extend({

    // a list of url, and what function to run for each
    routes: {
        ""                  : "list",
        "countries/:id"	    : "countryDetails",
        "about"             : "aboutPage"
    },

    initialize: function () {
    },

    /**
     * Shows a list of all the countries
     */
	list: function() {
        console.log("AppRouter: list");
        $("#content").html(new CountryListView({model:app.countryCollection.models}).el);
        
        //refresh data filter search function after list populated
        $('#country-list').listview();
    },

    /**
     * Load a specific country and see the stories for it
     */
    countryDetails: function(id){
        console.log("AppRouter: Country "+id+" Details");
        var country = app.countryCollection.get(id);
        $("#content").html(new CountryDetailView({model: country}).el);
    },

    aboutPage: function(){
        console.log("AppRouter: aboutPage")
        $("#content").html(new AboutPageView().el);
    }

});
