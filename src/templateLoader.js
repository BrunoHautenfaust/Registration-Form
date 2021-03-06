MyRegForm.templateLoader = (function($, dh){
        function GetTemplate(source, selector, data) {
            if (!data) {
                data = {};
            }
            var compiledTemplate = Handlebars.templates[source];
            var output = compiledTemplate(data);
            $(selector).html(output);
            MyRegForm.app.trigger('CheckPageEvent'); // moved to pageHelper
            dh.SaveLoad();
        }
    
    return {
        GetTemplate        
    }
}(jQuery, MyRegForm.dataHelper));