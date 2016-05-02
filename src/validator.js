MyRegForm.validator = (function($){
    var messageCanBeShown = true;   
    
    function _isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    }
    
    function _displayMessage(el, msg) {
       var $message = $('<span></span>', {
            class: 'label label-danger',
            text: msg,
            css: {
                fontSize: 15
            }
        });
       $message.append('</br>');
       $(el).after($message);
       $message.fadeOut(2000);
    }
    
    function validateFields() {
        // Find all 'required' and perform checks
        $('#template-output').find('[required]').each(function(){
            // Attach focusout event
           $(this).on('focusout', function(e){
               if (messageCanBeShown) {
                   messageCanBeShown = false;  
                   var that = this;
                  
                   if ( $(this).is(':text') && !$.trim($(this).val()).length ) {
                      _displayMessage(that, 'Въведете текст в полето ');
                   }
                     
                   if ( $(this).is('input[type=date]') && $(this).val() == '' ) {
                       _displayMessage(that, 'Изберете дата ');
                   }
                       
                   if ( $(this).is(':password') && !$.trim($(this).val()).length ) {
                       _displayMessage(that, 'Въведете парола ');
                   }
                       
                   if ( $(this).is('#repassword') && $('#password').val() != $('#repassword').val() ) {
                       _displayMessage(that, 'Паролите в двете полета трябва да съвпадат ');
                   }
                       
                   if ( $(this).is('input[type=email]') && !_isValidEmailAddress( $(this).val()) ) {
                       _displayMessage(that, 'Въведете валиден е-мейл адрес ');
                   }
                       
                   setTimeout(function(){
                       messageCanBeShown = true;
                   }, 1400);
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
            
            // Add/Remove required
            $('#template-output').find('input:text:not(#langs, #hobbies)').each(function(){
                if ( !$.trim($(this).val()).length ) {
                    $(this).prop('required', true);
                } else {
                    $(this).prop('required', false);
                }
            });

            if ($('input[type=date]').val() == '' ) {
                 $('input[type=date]').prop('required', true);
            } else {
                 $('input[type=date]').prop('required', false);
            }

            $('#template-output').find('input:password').each(function(){
                if ( !$.trim($(this).val()).length || ( $(this).is('#repassword') && $('#password').val() != $('#repassword').val()) ) {
                    $(this).prop('required', true);
                } else {
                    $(this).prop('required', false);
                }
            });

            if ( !_isValidEmailAddress( $('input[type=email]').val()) ) {
                $('input[type=email]').prop('required', true);
            } else {
                $('input[type=email]').prop('required', false);
            }
    
        }, 500);
    }
    
        return {
            validateFields,
            CheckNextButtonAndRequired
        }
    
}(jQuery));