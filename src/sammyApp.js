var app = Sammy('#template-output', function() {
    
        this.get('#/', function() {
          this.redirect('#/1');
        });
    
        this.get('#/1', function() {
            templateLoader.GetTemplate('page1', '#template-output');
        });
    
        this.get('#/2', function() {
            templateLoader.GetTemplate('page2', '#template-output');
        });
    
        this.get('#/3', function() {
            templateLoader.GetTemplate('page3', '#template-output');
        });
        
        this.get('#/4', function() {
            templateLoader.GetTemplate('page4', '#template-output');
        });       
    
        this.get('#/5', function() {
            templateLoader.GetTemplate('page5', '#template-output');
        });
    
        this.get('#/6', function() {
           templateLoader.GetTemplate('page6', '#template-output', details);
        });
        
        this.bind('CheckPageEvent', function(e, data) {
          var page = e.target.baseURI.slice(-1);
          viewport = document.querySelector("meta[name=viewport]");
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
            // mobile viewport
            if ( (page >=1 && page <= 5) && ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ) {
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            } else {
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes');
            }
            
            validator.validateFields();
            validator.CheckNextButtonAndRequired();
           
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
     
    pageHelper.Swipe();
});

app.run('#/1');