var IndexView = Backbone.View.extend({
    template: require("../html/index.jade"),

    render: function() {
        this.$el.html( this.template() );
        return this;
    }
});

exports.view = IndexView;