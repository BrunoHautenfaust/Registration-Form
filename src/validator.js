Validator = {
    CheckFocusOut: function(selector, message) {
        $(selector).focusout(function() {
            if (!$.trim($(selector).val()).length) {
               // console.log ($(selector).val());
              //  console.log (typeof $(selector).val());
              //  console.log ($(selector));
                var $message = $('<span>'+message+'</span>');
                $(selector).after($message);
                $message.fadeOut(2000);
            }
        });
    },
    CheckKeyUp: function(selector) {
        $(selector).keyup(function(){
            if ($.trim($(selector).val()).length) {
            $('#next').prop('disabled', false);
            } else {
            $('#next').prop('disabled', true);
            }
        });
    }
                          
};
