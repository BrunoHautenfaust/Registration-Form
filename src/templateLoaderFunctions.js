//$(document).ready(function(){


// });

function CompileTemplate(source, selector) {
    var template = Handlebars.compile(source);
    var output = template();
    $(selector).html(output);
}

function LoadTemplate(templatePath) {
    var source = $.get(templatePath, function(data){
    CompileTemplate(data, '#template-output');
    });
}