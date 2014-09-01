require("../../styles/header.less");

var HeaderView = Backbone.View.extend({
    template: require("../../html/header.jade"),

    render: function() {
        this.$el.html( this.template() );
        return this;
    }
});

exports.view = HeaderView;