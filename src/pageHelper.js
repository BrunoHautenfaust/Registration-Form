MyRegForm.pageHelper = (function($, cp){
     var colors = ['darkred', 'purple', 'teal', 'darkolivegreen', 'darkslategray', 'mediumvioletred', 'chocolate', 'darkgreen', 'darkcyan'];
    
    function PreviousPage() {
        var page = window.location.href.slice(-1);
        if (page != 1) {
            cp.PickColor('body', colors);
                $('#template-output > *').animate({
                marginLeft : "20%",
                opacity: 0,
              }, 250, function(){
                app.trigger('previousPageEvent');
                app.trigger('CheckPageEvent');
            });
        }
    }

    function NextPage() {
        var page = window.location.href.slice(-1);
        if (page != 6) {
            cp.PickColor('body', colors);
            $('#template-output > *').animate({
                marginRight : "20%",
                opacity: 0,
                }, 250, function(){
                app.trigger('nextPageEvent');
                app.trigger('CheckPageEvent');
            });
        }
    }

    function Swipe() {
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
    }
    
    $('#previous').click(PreviousPage);
    $('#next').click(NextPage);
    
    return {
        Swipe
    }
    
}(jQuery, MyRegForm.colorPicker));