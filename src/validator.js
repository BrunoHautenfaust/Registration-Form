/*
Validator = {
    CheckFocusOut: function(selector, message) {
        $(selector).focusout(function() {
            if (!$.trim($(selector).val()).length) {
               // console.log ($(selector).val());
              //  console.log (typeof $(selector).val());
              //  console.log ($(selector));
                var $message = $('<span  class="form-control">'+message+'</span>');
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
*/

validator = (function(){
      function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}
    
    function validateFields() {
        // Find all 'required' and perform checks
            $('#template-output').find('[required]').each(function(){
                
             //   console.log("required found");
            // Attach focusout event
                   $(this).on('focusout', function(e){
            // check input type           
                       if ( $(this).is(':text') && !$.trim($(this).val()).length ) {
                           var $message = $('<span class="label label-danger">'+'Въведете текст в полето'+'</span>').css({
                               fontSize: 15,
                           });
                           $(this).after($message);
                           $message.fadeOut(2000);
                       }
                       
                       if ( $(this).is('input[type=date]') && $(this).val() == '' ) {
                          // console.log($(this).context.value);
                           var $message = $('<span class="label label-danger">'+'Изберете дата'+'</span>').css({
                               fontSize: 15,
                           });
                           $(this).after($message);
                           $message.fadeOut(2000);
                       }
                       
                       if ( $(this).is(':password') && !$.trim($(this).val()).length ) {
                          // console.log($(this).context.value);
                           var $message = $('<span class="label label-danger">'+'Въведете парола'+'</span>').css({
                               fontSize: 15,
                           });
                           $(this).after($message);
                           $message.fadeOut(2000);
                       }
                       
                       if ( $(this).is('input[type=email]') && !isValidEmailAddress( $(this).val()) ) {
                          // console.log($(this).context.value);
                           var $message = $('<span class="label label-danger">'+'Въведете валиден е-мейл адрес'+'</span>').css({
                               fontSize: 15,
                           });
                           $(this).after($message);
                           $message.fadeOut(2000);
                       }
                       
                    
                    });
                    
                    
            });
        }
    
    function CheckNextButtonAndRequired() {
        setInterval(function(){
    // Enable/Disable NEXT if required
    if ($('#template-output').find('[required]').length > 0) {
        $('#next').prop('disabled', true);
    } else {
        $('#next').prop('disabled', false);
    }
    // Enable/Disable SWIPE if required
    
    // Add/Remove required
    $('#template-output').find('input:text').each(function(){
        if ( !$.trim($(this).val()).length ) {
            $(this).prop('required', true);
        } else {
            $(this).prop('required', false);
        }
    });
    
    if ( $('#template-output').has('input[type=date]') && $('input[type=date]').val() == '' ) {
         $('input[type=date]').prop('required', true);
    } else if ( $('input[type=date]').val() != '' ) {
         $('input[type=date]').prop('required', false);
    }
    
    $('#template-output').find('input:password').each(function(){
        if ( !$.trim($(this).val()).length ) {
            $(this).prop('required', true);
        } else {
            $(this).prop('required', false);
        }
    });
    
    if ( $('#template-output').has('input[type=email]') && !isValidEmailAddress( $('input[type=email]').val()) ) {
         $('input[type=email]').prop('required', true);
    } else if ( isValidEmailAddress( $('input[type=email]').val()) ) {
         $('input[type=email]').prop('required', false);
    }
    
}, 500);
    }
    
  
    
        return {
            validateFields,
            CheckNextButtonAndRequired
        }
    
}());