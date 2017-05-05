this["JST"] = this["JST"] || {};

this["JST"]["archive_all_cards"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header><span class=\"icon-sm icon-back\"></span><h1>Archive All Cards in this List?</h1><div class=\"close small\"></div></header><section><p>This will remove all the cards in this list from the board. To view archived cards and bring them back to the board, click “Menu” > “Archived Items.”</p><button type=\"button\" id=\"nuke_it\" class=\"btn\">Archive All</button></section>";
},"useData":true});

this["JST"]["board_menu"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input type=\"text\" placeholder=\"Find boards by name...\" id=\"search\"><ul id=\"board_types\"><li><span class=\"icon-sm icon-star\"></span><h1>Starred Boards</h1><span class=\"icon-sm icon-add\"></span></li><li><span class=\"icon-sm icon-clock\"></span><h1>Recent Boards</h1><span class=\"icon-sm icon-add\"></span></li><li><span class=\"icon-sm icon-board\"></span><h1>Personal Boards</h1><span class=\"icon-sm icon-add\"></span></li></ul><ul id=\"menu_actions\"><li><div><a href=\"#\">Create new board...</a></div></li><li><div><a href=\"#\">Always keep this menu open.</a></div></li><li><div><a href=\"#\">See closed boards.</a></div></li></ul>";
},"useData":true});

this["JST"]["board_overview"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " gold ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href='/b/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "/"
    + alias4((helpers.uri || (depth0 && depth0.uri) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"uri","hash":{},"data":data}))
    + "'><div class=\"board_obj\" data-board-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "<span class=\"icon-sm icon-star "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.starred : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"></span></div></a>";
},"useData":true});

this["JST"]["board"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " gold ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"margin_wrapper\" data-board-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.board : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"><div class=\"wrapper\"><div class=\"board_header\"><div class=\"left\"><div class=\"board_name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.board : depth0)) != null ? stack1.title : stack1), depth0))
    + "</div><div class=\"star\"><span class=\"icon-sm icon-star"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.board : depth0)) != null ? stack1.starred : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"></span></div><div class=\"private\"><div class=\"lock\"><span class=\"icon-sm icon-private\"></span></div><span>Private</span></div></div><div class=\"right\"><div class=\"show_menu\"><div class=\"dots\"><span class=\"icon-sm icon-overflow-menu-horizontal\"></span></div><span class=\"btn-text\">Show Menu</span></div></div></div><div class=\"board_list_container\"><ul class=\"list-inline\" id=\"listlist\"><li class=\"add_list\"><header>Add a list...</header></li></ul></div></div></div>";
},"useData":true});

this["JST"]["boards"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"margin_wrapper\"><div class=\"boards_wrapper\"><section class=\"board_collection starred\"><header><h1><span class=\"icon-lg icon-star\"></span><span class=\"header_text\">Starred Boards</span></h1></header><ul id=\"starred_boards\"></ul></section><section class=\"board_collection personal\"><header><h1><span class=\"icon-lg icon-member\"></span><span class=\"header_text\">Personal Boards</span></h1></header><ul><li><div class=\"create_new_board\">Create new board...</div></li></ul></section></div></div>";
},"useData":true});

this["JST"]["card_overview"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"/c/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "/"
    + alias4((helpers.uri || (depth0 && depth0.uri) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"uri","hash":{},"data":data}))
    + "\"><header><h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1><span class=\"edit icon-sm icon-edit\"></span></header></a>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"card_detail\"><div class=\"close\"></div><div class=\"two_columns\"><div class=\"content\"><section id=\"general\"><header><h1><span class=\"icon-lg icon-card\"></span>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1><p>in list <a href=\"listname\">listname</a><p></header><a href=\"#\" class=\"edit-description\"><span class=\"icon-sm icon-description\"></span>Edit the description...</a></section><section id=\"comment\"><header><h1><span class=\"icon-lg icon-comment\"></span>Add Comment</h1></header><div class=\"user_pic\"></div><form action=\"\"><fieldset><div class=\"comment_container\"><textarea name=\"comment_text\" id=\"comment_text\" cols=\"65\" rows=\"2\" placeholder=\"Write a comment...\"></textarea><div class=\"comment_toolbar\"><div class=\"tools\"><span class=\"icon-sm icon-attachment\"></span><span class=\"icon-sm icon-mention\"></span><span class=\"icon-sm icon-emoji\"></span><span class=\"icon-sm icon-card\"></span></div></div></div><button class=\"btn btn-secondary\">Send</button></fieldset></form></section><section id=\"activity\"><header class=\"clearfix\"><h1><span class=\"icon-lg icon-activity\"></span>Activity</h1><a href=\"#\">Hide Details</a></header><ul id=\"activity_feed\"><li><div class=\"small_user_pic\"></div><span><strong>David Kurutz</strong>left this card<small>yesterday at 11:34PM</small></span></li><li><div class=\"small_user_pic\"></div><span><strong>David Kurutz</strong>left this card<small>yesterday at 11:34PM</small></span></li><li><div class=\"small_user_pic\"></div><span><strong>David Kurutz</strong>left this card<small>yesterday at 11:34PM</small></span></li></ul></section></div><div class=\"sidebar\"><div class=\"add\"><header><h1>Add</h1></header><ul class=\"edit_add\"><li><button class=\"btn btn-sm btn-block\"><span class=\"icon-sm icon-member\"></span>Members</button></li><li><button class=\"btn btn-sm btn-block\"><span class=\"icon-sm icon-label\"></span>Labels</button></li><li><button class=\"btn btn-sm btn-block\"><span class=\"icon-sm icon-checklist\"></span>Checklist</button></li><li><button class=\"btn btn-sm btn-block\"><span class=\"icon-sm icon-clock\"></span>Due Date</button></li><li><button class=\"btn btn-sm btn-block\"><span class=\"icon-sm icon-attachment\"></span>Attachment</button></li></ul></div><div class=\"edit_actions\"><header><h1>Actions</h1></header><ul class=\"actions_list\"><li><button class=\"btn btn-sm btn-block\"><span class=\"icon-sm icon-move\"></span>Move</button></li><li><button class=\"btn btn-sm btn-block\"><span class=\"icon-sm icon-card\"></span>Copy</button></li><li><button class=\"btn btn-sm btn-block\"><span class=\"icon-sm icon-subscribe\"></span>Subscribe</button></li><li><button class=\"btn btn-sm btn-block\"><span class=\"icon-sm icon-archive\"></span>Archive</button></li></ul></div><footer><a href=\"#\" class=\"share\">Share and more...</a></footer></div></div></div>";
},"useData":true});

this["JST"]["create_board_form"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header><h1>Create Board</h1><div class=\"close small\"></div></header><form action=\"#\"><fieldset><dl><dt><label for=\"title\">Title</label></dt><dd><input type=\"text\" autofocus placeholder='Like \"Reading Collection\" for example' name=\"title\" id=\"title\"></dd><dt><label for=\"team\">Team<span class=\"icon-sm icon-information\"></span></label></dt><dd><select name=\"team\" id=\"team\"><option value=\"none\">(none)</option></select></dd></dl><span><span class=\"icon-sm icon-private\"></span>This board will be <strong>Private</strong>. <a href=\"#\">Change.</a></span><input type=\"submit\" class=\"btn btn-submit\" value=\"Create\"></fieldset></form>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"left_header\"><div class=\"boards\" id=\"board-btn\"><span class=\"icon-sm icon-board\"></span><span class=\"btn-text\">Boards<span></div><div class=\"search\"><span class=\"icon-sm icon-search\"></span></div></nav><a href=\"/\"><div class=\"header_logo\"></div></a><nav class=\"right_header\"><div class=\"create\"><span class=\"icon-sm icon-add\"></span></div><div class=\"user\"><span class=\"btn-text\">David Kurutz<span></div><div class=\"info\"><span class=\"icon-sm icon-information\"></span></div><div class=\"notification\"><span class=\"icon-sm icon-notification\"></span></div></nav>";
},"useData":true});

this["JST"]["list_actions"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header><h1>List Actions</h1><div class=\"close small\"></div></header><ul><li id=\"add_card\">Add Card...</li><li>Copy List...</li><li>Move List...</li><li>Subscribe</li></ul><ul><li id=\"move_all_to_another\">Move All Cards in This List..</li><li id=\"archive_all_cards\">Archive All Cards in This List...</li></ul><ul><li id=\"archive_list\">Archive This List</li></ul>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header><div contenteditable=\"true\" class=\"edit_title\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><span class=\"icon-sm icon-overflow-menu-horizontal list_actions\"></span></header><ul class=\"cards\"></ul><footer><a href=\"#\">Add a card...</a></footer>";
},"useData":true});

this["JST"]["move_all"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li class=\"no-hover\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + " (current)</li>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"move_target\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<header><span class=\"icon-sm icon-back\"></span><h1>Move All Cards in List</h1><div class=\"close small\"></div></header><ul>"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.current : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

this["JST"]["new_card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<form action=\"#\"><fieldset><textarea name=\"name\" id=\"card_name\" cols=\"30\" rows=\"3\"></textarea><input type=\"hidden\" name=\"list_id\" value="
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "><input type=\"submit\" value=\"Add\" class=\"btn-sm btn-success\"><div class=\"close\"></div><span class=\"icon-lg icon-overflow-menu-horizontal\"></span></fieldset></form>";
},"useData":true});

this["JST"]["new_list_button"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<form action=\"#\"><fieldset><input type=\"text\" id=\"add_list_name\" name=\"name\" placeholder=\"Add a list...\"><input type=\"hidden\" name=\"board_id\" value="
    + container.escapeExpression(((helper = (helper = helpers.board_id || (depth0 != null ? depth0.board_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"board_id","hash":{},"data":data}) : helper)))
    + "><input type=\"submit\" value=\"Save\" class=\"btn-sm btn-success\"></fieldset></form><div class=\"close\"></div>";
},"useData":true});

this["JST"]["rename_board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header><h1>Rename Board</h1><div class=\"close small\"></div></header><form action=\"#\"><fieldset><dl><dt><label for=\"new_name\">Name</label></dt><dd><input type=\"text\" name=\"title\" id=\"new_name\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "\"></dd></dl><input type=\"submit\" class='btn btn-md' value=\"Rename\"></fieldset></form>";
},"useData":true});