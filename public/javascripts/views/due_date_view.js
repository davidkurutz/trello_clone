var DueDateView = BaseView.extend({
  template: App.templates.due_date,
  id: 'dueDateForm',
  events: {
    'click': 'stop',
    'click .close': 'close',
    'submit form': 'submit',
    'click .remove': 'removeDueDate'
  },
  removeDueDate: function(e) {
    e.preventDefault();
    e.stopPropagation()
    var model = this.model;
    var id = model.get('id');
    model.unset('duedate');
    model.unset('completed');

    model.save({}, {
      context: this,
      success: function() {
        this.remove();
      }
    })
  },
  submit: function(e) {
    e.preventDefault();
    var f = this.$("form").serializeArray();
    var obj = {};
    var data = {}

    f.forEach(function(input) {
      obj[input.name] = input.value;
    });

    data.duedate = moment(obj.duedate + ' ' + obj.time, "MM-DD-YYYY H:mmA").format()
    data.completed = false

    this.model.save(data,{
      context: this,
      success: function(json) {
        this.close()
      }
    })
  },
  close: function(e) {
    this.remove();
  },
  render: function(options) {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.css(options.offset)
    
    this.$("#calendar").datepicker({
      altField: "#duedate-field",
      dateFormat: 'mm/dd/yy',
      defaultDate: moment(this.model.get('duedate')).format('L')
    })
  },
  initialize: function(options) {
    this.render(options)
  }
})