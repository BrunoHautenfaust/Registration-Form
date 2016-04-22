// initialize the application
var app = Sammy('#template-output', function() {
    
   // define a 'get' route that will be triggered at '#/'
        this.get('#/', function() {
          // this context is a Sammy.EventContext
          this.redirect('#/1');
        });
    
        this.get('#/1', function() {
            Templating('templates/page1.handlebars', '#template-output');
            //LoadTemplate('templates/page1.handlebars');
        });
    
        this.get('#/2', function() {
            Templating('templates/page2.handlebars', '#template-output');
            //LoadTemplate('templates/page2.handlebars');
        });
    
        this.get('#/3', function() {
            Templating('templates/page3.handlebars', '#template-output');
            //LoadTemplate('templates/page3.handlebars');
        });
        
        this.get('#/4', function() {
            Templating('templates/page4.handlebars', '#template-output');
            //LoadTemplate('templates/page4.handlebars');
        });       
    
        this.get('#/5', function() {
            Templating('templates/page5.handlebars', '#template-output');
           // LoadTemplate('templates/page5.handlebars');
        });
    
        this.get('#/6', function() {
           Templating('templates/page6.handlebars', '#template-output', details); //LoadTemplate('templates/page6.handlebars')
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
            // FindRequiredFields('#fname');
            //  MakeRequired(IDs);
           // CheckIfPageHasRequired();
               
        });
    
        this.bind('previousPageEvent', function(e, data) {
          var page = e.target.baseURI.slice(-1);
         // console.log(e.target.baseURI);
          page = +page;
         // console.log(typeof page + ' ' + page);
        if (page > 1 && page <= 6) {
            page-=1;
        }
          this.redirect('#/'+page);
      });
    
        this.bind('nextPageEvent', function(e, data) {
          var page = e.target.baseURI.slice(-1);
         // console.log(e.target.baseURI);
          page = +page;
         // console.log(typeof page + ' ' + page);
         if (page >= 1 && page < 6) {
            page+=1;
        }
           // console.log(typeof page + ' ' + page);
          this.redirect('#/'+page);
      });
    
    
     
});

app.run('#/1');

function PreviousPage() {
    app.trigger('previousPageEvent');
}

function NextPage() {
    app.trigger('nextPageEvent');
}
// ===============
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