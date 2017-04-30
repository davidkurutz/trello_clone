this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"margin_wrapper\"><div class=\"wrapper\"><div class=\"board_header\"><div class=\"left\"><div class=\"board_name\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><div class=\"star\"><span class=\"icon-sm icon-star\"></span></div><div class=\"private\"><div class=\"lock\"><span class=\"icon-sm icon-private\"></span></div><span>Private</span></div></div><div class=\"right\"><div class=\"show_menu\"><div class=\"dots\"><span class=\"icon-sm icon-overflow-menu-horizontal\"></span></div><span class=\"btn-text\">Show Menu</span></div></div></div><div class=\"board_list_container\"><ul class=\"list-inline\"><li class=\"board_list\"><header><h1>Test Data</h1><span class=\"icon-sm icon-overflow-menu-horizontal list_actions\"></span></header><ul class=\"cards\"><li class=\"card\"><header><h1>Title</h1><span class=\"edit icon-sm icon-edit\"></span></header></li><li class=\"card\"><header><h1>Title</h1><span class=\"edit icon-sm icon-edit\"></span></header></li><li class=\"card\"><header><h1>Title</h1><span class=\"edit icon-sm icon-edit\"></span></header></li></ul><footer><a href=\"\">Add a card...</a></footer></li><li class=\"board_list\"><header><h1>Test Data</h1><span class=\"icon-sm icon-overflow-menu-horizontal list_actions\"></span></header><ul class=\"cards\"></ul><footer><a href=\"\">Add a card...</a></footer></li><li class=\"add_list\"><header>Add a list...</header></li></ul></div></div></div>";
},"useData":true});

this["JST"]["boards"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a href=\"/b/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"board_obj\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "<span class=\"icon-sm icon-star\"></span></div></a></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"margin_wrapper\"><div class=\"boards_wrapper\"><header><h1><span class=\"icon-lg icon-member\"></span><span class=\"header_text\">Personal Boards</span></h1></header><section class=\"personal_boards\"><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.boards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<li><div class=\"create_new_board\">Create new board...</div></li></ul></section></div></div>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"left_header\"><div class=\"boards\" id=\"board-btn\"><span class=\"icon-sm icon-board\"></span><span class=\"btn-text\">Boards<span></div><div class=\"search\"><span class=\"icon-sm icon-search\"></span></div></nav><div class=\"header_logo\"></div><nav class=\"right_header\"><div class=\"create\"><span class=\"icon-sm icon-add\"></span></div><div class=\"user\"><span class=\"btn-text\">David Kurutz<span></div><div class=\"info\"><span class=\"icon-sm icon-information\"></span></div><div class=\"notification\"><span class=\"icon-sm icon-notification\"></span></div></nav>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header><h1>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1><span class=\"icon-sm icon-overflow-menu-horizontal list_actions\"></span></header><ul class=\"cards\"><li class=\"card\"><header><h1>Title</h1><span class=\"edit icon-sm icon-edit\"></span></header></li><li class=\"card\"><header><h1>Title</h1><span class=\"edit icon-sm icon-edit\"></span></header></li><li class=\"card\"><header><h1>Title</h1><span class=\"edit icon-sm icon-edit\"></span></header></li></ul><footer><a href=\"\">Add a card...</a></footer>";
},"useData":true});