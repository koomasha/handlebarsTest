(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['404'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row errorpage wrapper\">\r\n    <h3>404 : Not Found</h3>\r\n</div>";
},"useData":true});
templates['500'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row errorpage wrapper\">\r\n    <h3>500 : Server Error</h3>\r\n</div>";
},"useData":true});
templates['calendar'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.day,depth0,{"name":"day","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n<div class=\"row calendar wrapper\">\r\n    <div class=\"col-md-12 header\">\r\n        <div class=\"col-md-4\">\r\n            <img class=\"medium-icon\" id=\"datepicker\" src=\"/img/icons/calendar.svg\">\r\n"
    + ((stack1 = container.invokePartial(partials["week-title"],(depth0 != null ? depth0.titleData : depth0),{"name":"week-title","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            <img class=\"medium-icon\" src=\"/img/icons/prev.svg\">\r\n            <img class=\"medium-icon\" src=\"/img/icons/next.svg\">\r\n            <input type=\"hidden\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.controllerData || (depth0 != null ? depth0.controllerData : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"controllerData","hash":{},"data":data}) : helper)))
    + "\">                                                                                                                                                                                                                                          \r\n        </div>\r\n    </div>  \r\n\r\n\r\n    <div class=\"col-md-12 seven-cols\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.weekdays : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n                                                                                                                                                                                                                                     ";
},"usePartial":true,"useData":true});
templates['habbits'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['layouts/main'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n"
    + ((stack1 = container.invokePartial(partials.head,depth0,{"name":"head","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        <title>Time Manager</title>\r\n    </head>\r\n    <body class=\"bg-purple\">  \r\n        <div class=\"container-fluid\">\r\n"
    + ((stack1 = container.invokePartial(partials.navigation,depth0,{"name":"navigation","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            <div id=\"main-wrapper\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n    </body>\r\n\r\n</html>";
},"usePartial":true,"useData":true});
templates['partials/day'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "last";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-md-1 day "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLastWeekDay : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <div class=\"col-md-12 title\">\r\n        <div>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.dayName || (depth0 != null ? depth0.dayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dayName","hash":{},"data":data}) : helper)))
    + "</div>  \r\n        <div> <img class=\"medium-icon\"  src=\"/img/icons/plus.svg\" /></div>\r\n    </div> \r\n    <div class=\"tasks col-md-12\"></div> \r\n</div>";
},"useData":true});
templates['partials/head'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<meta charset=\"UTF-8\">\r\n<!-- If IE use the latest rendering engine -->\r\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n<!-- Set the page to the width of the device and set the zoom level -->\r\n<meta name=\"viewport\" content=\"width = device-width, initial-scale = 1\">\r\n<link rel = \"stylesheet\" type = \"text/css\" href = \"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" />\r\n<link rel = \"stylesheet\" type = \"text/css\" href = \"/css/style.css\" />\r\n<link rel=\"stylesheet\" href=\"/css/pikaday.css\">\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.min.js\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js\"></script>\r\n<script src=\"/js/views/templates.js\"></script>  \r\n<script src=\"/js/views/partials.js\"></script>  \r\n<script src=\"/js/script.js\"></script>                                                                                                                                                                                                                                        \r\n<script src=\"/js/pikaday.js\"></script>                                                                                                                                                                                                                                        \r\n<script src=\"/js/calendarController.js\"></script>  \r\n";
},"useData":true});
templates['partials/navigation'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row navigation wrapper\">\r\n    <div class=\"user-panel col-md-2\">\r\n        <div  class=\"col-md-12\">\r\n            <img class=\"medium-icon\" src=\"/img/icons/user.svg\">\r\n            <span class=\"title\">Hello Masha!</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"tool-list col-md-2 col-md-offset-8\">\r\n        <div class=\"col-md-4\"><img class=\"medium-icon\" src=\"/img/icons/graph.svg\"></div>\r\n        <div class=\"col-md-4\"><img class=\"medium-icon\" src=\"/img/icons/habbits.svg\"></div>\r\n        <div class=\"col-md-4\"><img class=\"medium-icon\" src=\"/img/icons/settings.svg\"></div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['partials/week-title'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"title\">"
    + alias4(((helper = (helper = helpers.firstWeekDayDate || (depth0 != null ? depth0.firstWeekDayDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstWeekDayDate","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.lastWeekDayDate || (depth0 != null ? depth0.lastWeekDayDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastWeekDayDate","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.monthName || (depth0 != null ? depth0.monthName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monthName","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});
})();