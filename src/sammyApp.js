var app = Sammy('#template-output', function() {
    
        this.get('#/', function() {
          // this context is a Sammy.EventContext
          this.redirect('#/1');
        });
    
        this.get('#/1', function() {
            Templating('templates/page1.handlebars', '#template-output');
        });
    
        this.get('#/2', function() {
            Templating('templates/page2.handlebars', '#template-output');
        });
    
        this.get('#/3', function() {
            Templating('templates/page3.handlebars', '#template-output');
        });
        
        this.get('#/4', function() {
            Templating('templates/page4.handlebars', '#template-output');
        });       
    
        this.get('#/5', function() {
            Templating('templates/page5.handlebars', '#template-output');
        });
    
        this.get('#/6', function() {
           Templating('templates/page6.handlebars', '#template-output', details);
        });
        
        this.bind('CheckPageEvent', function(e, data) {
          var page = e.target.baseURI.slice(-1);
            page = parseInt(page);
            // previous
            if (page === 1) {
                $('#previous').hide();
            } else {
                $('#previous').show();
            }
            // next
            if (page === 6) {
                $('#next').hide();
            } else {
                $('#next').show();
            }
            
            // Checks:
            // Check if page has reqired and disable next
            /*
            if ($('#template-output').find('[required]').length > 0) {
                $('#next').prop('disabled', true);
            } else {
                $('#next').prop('disabled', false);
            }
            */
            /*
            $(window).on('mouseover click', function() {
                console.log('shit');
                if ($('#template-output').find('[required]').length > 0) {
                    $('#next').prop('disabled', true);
                } else {
                    $('#next').prop('disabled', false);
                }
            });
            */
            // Find all 'required' and perform checks
            $('#template-output').find('[required]').each(function(){
                
                console.log("IR");
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
           // BACKUP
            /*
               $('#template-output').find('input').each(function(){
                
                if( $(this).prop('required') ){
                   console.log("IR");
            // Attach focusout event
                   $(this).on('focusout', function(e){
                    
                       if ( $(this).is(':text') && !$.trim($(this).val()).length ) {
                           var $message = $('<span>'+'Въведете минимум'+'</span>');
                           $(this).after($message);
                           $message.fadeOut(2000);
                       }
                       
                    });
                    
                    
                }
            });
            */
            
               
        });
    
        this.bind('previousPageEvent', function(e, data) {
          var page = e.target.baseURI.slice(-1);
         // console.log(e.target.baseURI);
          page = +page;
        if (page > 1 && page <= 6) {
            page-=1;
        }
          this.redirect('#/'+page);
      });
    
        this.bind('nextPageEvent', function(e, data) {
          var page = e.target.baseURI.slice(-1);
         // console.log(e.target.baseURI);
          page = +page;
         if (page >= 1 && page < 6) {
            page+=1;
        }
          this.redirect('#/'+page);
      });
    
     
});

app.run('#/1');
 

function PreviousPage() {
     var page = window.location.href.slice(-1);
    if (page != 1) {
        ColorPick('body', colors);
            $('#template-output > *').animate({
            marginLeft : "20%",
            opacity: 0,
          }, 250, function(){
            app.trigger('previousPageEvent');
        });
    }
}

function NextPage() {
     var page = window.location.href.slice(-1);
    if (page != 6) {
        ColorPick('body', colors);
        $('#template-output > *').animate({
            marginRight : "20%",
            opacity: 0,
            }, 250, function(){
            app.trigger('nextPageEvent');
        });
    }
}
/*
$( window ).swipeleft(function (event) {
    NextPage();
});
 
$( window ).swiperight(function (event) {
    PreviousPage();
});
*/
$(window).on('swipeleft swiperight', function(event) {
    if ( !$(event.target).is('input') ) {
        // Block if required
        if ($('#template-output').find('[required]').length == 0) {
            if (event.type=='swipeleft') {
             NextPage();
            }
        }
        if (event.type=='swiperight') {
            PreviousPage();
        }
    }
});
  
function Add(element, v) {
    /*
    if (element.value == v) {
        var $input = $('<input type=text />')
        var $message = $input;
       // console.log(e.value);
        $(element).after($message);
        $(element).keyup(dataHelper.saveEventChange('#city', details, 'city'));
    }*/
   
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

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

    /*
    $('#template-output > *').promise().done(function(){
    app.trigger('nextPageEvent');
  });*/
  //  app.trigger('nextPageEvent');

//var selectors = ['#fname', '#lname'];

/*
function CheckSelectors() {
   
    $('#template-output').find('input').each(function(){
    if( $(this).prop('required') ){
       console.log("IR");
        
    }
});
    
}
*/
 
/*
function FocusOut() {
    $("#template-output").on('click', function(){
            // Karantia
        
        
        $('input:text').on('focusout', function(e){
            console.log('lost focus');
        });
        
        $(selector).on('focusout', function(e){
            console.log(1);
            $(this).off();
        })

    });
}
;*/
/*
$("#template-output").on('click', function(){
    
  //  Validator.CheckFocusOut('#val1', 'Fuck you!');
    
    $('#val1').focusout(function() {
        if ($("this").length == 0) {
            var $message = $("<span>hello world</span>");
            $('#val1').after($message);
            $message.fadeOut(2000);
        }
    });
    
    Validator.CheckKeyUp('#val1');
    
    $("#val1").keyup(function() {
        if ($('#val1').val() != '' && $('#val1').val() != ' ') {
            $('#next').attr("disabled", false);
        } else {
            $('#next').attr("disabled", true);
        }
    });
    
     $("#template-output").off("click"); // 1 message hack! Not perfect!
});
*/

// $('#next, #previous').prop('disabled', true);