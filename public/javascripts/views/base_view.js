var BaseView = Backbone.View.extend({
  submitOnEnter: function(e) {
   if(e.keyCode === 13) {
      e.preventDefault();
      this.submit(e);
    }
  },
  stop: function(e) {
    e.stopPropagation();
  },
  archiveCard: function(e) {
    e.stopPropagation();
    this.model.destroy();
    this.close();
  },
  changeDueDate(e) {
    var offset = $(e.target).closest(".corner").offset();
    console.log(offset)
    var duedate = this.model.get("duedate");
    var datetime;
    var date;
    var time;
    
    if (this.model.get("duedate")) {
      datetime = moment(duedate).format("MM-DD-YYYY hh:mmA");
      date = datetime.split(' ')[0];
      time = datetime.split(' ')[1];
    } else {
      date = moment().add(1,'days').format('L');
      time = "12:00 AM";
    }

    offset.left += 20;
    offset.top += 20;


    this.$el.append(new DueDateView({
      model: this.model,
      offset: offset
    }).$el);

    $("input#time-field").val(time);
    $("input#duedate-field").val(date).focus();
  },
});