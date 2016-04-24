(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['page1'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\r\n    \r\n  <div class=\"form-group row\">\r\n    <label for=\"fname\" class=\"col-sm-2 form-control-label\">Име</label>\r\n    <div class=\"col-sm-7\">\r\n    <input type=\"text\" class=\"form-control\" id=\"fname\" required />\r\n    </div>\r\n  </div>\r\n  \r\n    <div class=\"form-group row\">\r\n    <label for=\"lname\" class=\"col-sm-2 form-control-label\">Фамилия</label>\r\n    <div class=\"col-sm-7\">\r\n    <input type=\"text\" class=\"form-control\" id=\"lname\" required />\r\n    </div>\r\n  </div>\r\n    \r\n    <div class=\"form-group row\">\r\n    <span class=\"col-sm-2 form-control-label\">Пол</span>\r\n    <label class=\"col-sm-2\">Мъж <input type=\"radio\" name=\"gender\" value=\"мъж\" /></label>\r\n    <label class=\"col-sm-3\">Жена <input type=\"radio\" name=\"gender\" value=\"жена\" /></label>\r\n    <label class=\"col-sm-2\">Неуточнен <input type=\"radio\" name=\"gender\" value=\"неуточнен\" /></label></br>\r\n    </div>\r\n    \r\n</form>\r\n";
},"useData":true});
templates['page2'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\r\n    \r\n  <div class=\"form-group row\">\r\n    <label for=\"birthdate\" class=\"col-sm-12 form-control-label\">Дата на раждане <input type=\"date\" id=\"birthdate\" required /></label>\r\n  </div>\r\n  \r\n    <div class=\"form-group row\">\r\n        <span>Град</span>\r\n        <select name=\"select\" id=\"city\">\r\n          <option selected></option> \r\n          <option value=\"Бургас\">Бургас</option> \r\n          <option value=\"Варна\">Варна</option>\r\n          <option value=\"София\">София</option>\r\n          <option value=\"Пловдив\">Пловдив</option>\r\n          <option value=\"Друг\">Друг</option>\r\n        </select>\r\n    </div>\r\n    \r\n     <div class=\"form-group row\">\r\n        <span>Образование</span>\r\n        <select name=\"select\" id=\"education\">\r\n          <option selected></option> \r\n          <option value=\"Основно\">Основно</option> \r\n          <option value=\"Средно\">Средно</option>\r\n          <option value=\"Висше\">Висше</option>\r\n          <option value=\"Друго\">Друго</option>\r\n        </select>\r\n    </div>\r\n\r\n</form>";
},"useData":true});
templates['page3'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\r\n    \r\n  <div class=\"form-group row\">\r\n    <label for=\"username\" class=\"col-sm-2 form-control-label\">Потребителско име</label>\r\n    <div class=\"col-sm-10\">\r\n    <input type=\"text\" class=\"form-control\" id=\"username\" required />\r\n    </div>\r\n  </div>\r\n  \r\n    <div class=\"form-group row\">\r\n    <label for=\"password\" class=\"col-sm-2 form-control-label\">Парола</label>\r\n    <div class=\"col-sm-10\">\r\n    <input type=\"password\" class=\"form-control\" id=\"password\" required />\r\n    </div>\r\n  </div>\r\n    \r\n    <div class=\"form-group row\">\r\n    <label for=\"repassword\" class=\"col-sm-2 form-control-label\">Повторно въвеждане на парола</label>\r\n    <div class=\"col-sm-10\">\r\n    <input type=\"password\" class=\"form-control\" id=\"repassword\" required />\r\n    </div>\r\n  </div>\r\n    \r\n</form>";
},"useData":true});
templates['page4'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\r\n    \r\n  <div class=\"form-group row\">\r\n    <label for=\"phone\" class=\"col-sm-2 form-control-label\">Телефон</label>\r\n    <div class=\"col-sm-10\">\r\n    <input type=\"tel\" class=\"form-control\" id=\"phone\" />\r\n    </div>\r\n  </div>\r\n  \r\n    <div class=\"form-group row\">\r\n    <label for=\"mail\" class=\"col-sm-2 form-control-label\">Поща</label>\r\n    <div class=\"col-sm-10\">\r\n    <input type=\"email\" class=\"form-control\" id=\"mail\" required />\r\n    </div>\r\n  </div>\r\n    \r\n    <div class=\"form-group row\">\r\n    <label for=\"site\" class=\"col-sm-2 form-control-label\">Уебсайт</label>\r\n    <div class=\"col-sm-10\">\r\n    <input type=\"url\" class=\"form-control\" id=\"site\" />\r\n    </div>\r\n  </div>\r\n    \r\n</form>";
},"useData":true});
templates['page5'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\r\n  \r\n    <div class=\"form-group row\">\r\n    <label for=\"langs\" class=\"col-sm-2 form-control-label\">Езици</label>\r\n    <div class=\"col-sm-10\">\r\n    <input type=\"text\" class=\"form-control\" id=\"langs\" />\r\n    </div>\r\n  </div>\r\n    \r\n    <div class=\"form-group row\">\r\n    <label for=\"hobbies\" class=\"col-sm-2 form-control-label\">Интереси</label>\r\n    <div class=\"col-sm-10\">\r\n    <input type=\"text\" class=\"form-control\" id=\"hobbies\" />\r\n    </div>\r\n  </div>\r\n    \r\n</form>";
},"useData":true});
templates['page6'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\r\n   <h3><p class=\"label label-pill label-info\">Име: "
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "</p><h3>\r\n   <h3><p class=\"label label-pill label-info\">Фамилия: "
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</p><h3>\r\n   <h3><p class=\"label label-pill label-info\">Пол: "
    + alias4(((helper = (helper = helpers.gender || (depth0 != null ? depth0.gender : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gender","hash":{},"data":data}) : helper)))
    + "</p><h3>\r\n   <h3><p class=\"label label-pill label-info\">Дата на раждане: "
    + alias4(((helper = (helper = helpers.birthdate || (depth0 != null ? depth0.birthdate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"birthdate","hash":{},"data":data}) : helper)))
    + "</p><h3>\r\n   <h3><p class=\"label label-pill label-info\">Град: "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "</p><h3>\r\n   <h3><p class=\"label label-pill label-info\">Образование: "
    + alias4(((helper = (helper = helpers.education || (depth0 != null ? depth0.education : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"education","hash":{},"data":data}) : helper)))
    + "</p><h3>\r\n   <h3><p class=\"label label-pill label-info\">Потребителско име: "
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + "</p><h3>\r\n   <h3><p class=\"label label-pill label-info\">Парола: ***</p><h3>\r\n   <h3><p class=\"label label-pill label-info\">Тел.: "
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</p><h3>\r\n   <h3><p class=\"label label-pill label-info\">Поща: "
    + alias4(((helper = (helper = helpers.mail || (depth0 != null ? depth0.mail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mail","hash":{},"data":data}) : helper)))
    + "</p><h3>\r\n   <h3><p class=\"label label-pill label-info\">Уебсайт: "
    + alias4(((helper = (helper = helpers.site || (depth0 != null ? depth0.site : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"site","hash":{},"data":data}) : helper)))
    + "</p><h3>\r\n   <h3><p class=\"label label-pill label-info\">Езици: "
    + alias4(((helper = (helper = helpers.languages || (depth0 != null ? depth0.languages : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"languages","hash":{},"data":data}) : helper)))
    + "</p><h3>\r\n   <h3><p class=\"label label-pill label-info\">Интереси: "
    + alias4(((helper = (helper = helpers.hobbies || (depth0 != null ? depth0.hobbies : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hobbies","hash":{},"data":data}) : helper)))
    + "</p><h3>\r\n</div>";
},"useData":true});
})();
