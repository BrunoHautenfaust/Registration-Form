var templateLoader = (function(){
        function GetTemplate(source, selector, data) {
            if (!data) {
                data = {};
            }
            var compiledTemplate = Handlebars.templates[source];
            var output = compiledTemplate(data);
            $(selector).html(output);
            app.trigger('CheckPageEvent');
        dataHelper.SaveLoad();
        }
    
    return {
        GetTemplate        
    }
    }());