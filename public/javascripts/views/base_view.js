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
    this.stop(e);
    this.model.destroy();
    this.close();
  },
  changeDueDate: function(e) {
    var offset = $(e.target).closest(".corner").offset();
    var dueDate = this.model.get("duedate");
    var dateTime;
    var date;
    var time;
    
    if (dueDate) {
      dateTime = moment(dueDate).format("MM-DD-YYYY hh:mmA");
      date = dateTime.split(" ")[0];
      time = dateTime.split(" ")[1];
    } else {
      date = moment().add(1,"days").format("L");
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