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