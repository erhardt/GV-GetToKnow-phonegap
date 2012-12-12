/**
 * Displays an about page.
 */
window.AboutPageView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    /**
     * Creates a UL element and populates it with info about the app and Global Voices
     */
    render: function () {
        this.$el.html('<p>Global Voices is a community of more than 500 bloggers and translators around the world who work together to bring you reports from blogs and citizen media everywhere, with emphasis on voices that are not ordinarily heard in international mainstream media.</p><p style="color:#2489ce;cursor:pointer;" onClick="history.back();return false;">BACK</p>');

        return this;
    }
});