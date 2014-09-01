require("!style!css!less!../../styles/index.less");

var HeaderView = require("./header.js").view;

var IndexView = Backbone.View.extend({
    template: require("../../html/index.jade"),

    render: function() {
        this.$el.html( this.template() );

        this.headerView = new HeaderView();

        this.$(".header").html( this.headerView.render().el );

        return this;
    }
});

exports.view = IndexView;