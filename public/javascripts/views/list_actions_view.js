var ListActionsView = Backbone.View.extend({
  template: App.templates.list_actions,
  archiveTemplate: App.templates.archive_all_cards,
  moveAllTemplate: App.templates.move_all,
  copyTemplate: App.templates.copy_list,
  className: "list_actions_menu",
  events: {
    "click .close": "remove",
    "click #archive_list": "archiveList",
    "click #add_card": "addCard",
    "click #archive_all_cards": "archiveAllCards",
    "click #move_list": "moveList",
    "click span.icon-back": "back",
    "click #move_all_to_another": 'moveAllToAnother',
    "click #nuke_it": "nukeIt",
    "click .move_target": "moveCards",
    "click #copy_list": 'copyList',
    "submit form": "remove"
  },
  moveList: function(e) {
    alert('moved')
  },
  copyList: function(e) {
    this.$el.html(new CopyListView({
      model: this.model
    }).$el)
 
    this.$("textarea").focus().select()
  },
  moveCards: function(e) {
    var targetId = +$(e.target).attr("data-id");
    var cards = this.model.get("Cards");
    _.invoke(cards.toArray(), 'set', {'list_id': targetId});
    _.invoke(cards.toArray(), 'save');
    this.remove();
    App.getListsAndPopulate();
  },
  moveAllToAnother: function(e) {
    e.stopPropagation();
    var current = this.model;
    var lists = _.reject(this.model.collection.toJSON(), { id: current.get('id')});

    this.$el.html(this.moveAllTemplate({
      current: current.toJSON(),
      lists: lists}));
  },
  nukeIt: function(e) {
    e.stopPropagation();
    var cards = this.model.get("Cards");
    _.invoke(cards.toArray(), 'destroy');
    this.remove();
  },
  back: function() {
    this.render();
  },
  archiveAllCards: function(e) {
    this.$el.html(this.archiveTemplate({}));
  },
  addCard: function(e) {
    this.model.trigger('add_card');
    this.remove();
  },
  getId: function() {
    return +this.$el.attr('data-list-id');
  },
  archiveList: function(e) {
    e.stopPropagation();
    var cards = this.model.get("Cards");
    _.invoke(cards.toArray(), 'destroy');
    this.model.destroy();
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
    this.listenTo(App, 'closePopup', this.remove);
  }
});