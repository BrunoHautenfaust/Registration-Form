// initialize the application
var app = Sammy('#template-output', function() {
    
   // define a 'get' route that will be triggered at '#/'
        this.get('#/', function() {
          // this context is a Sammy.EventContext
         // this.redirect('#/');
            LoadTemplate('templates/page1.handlebars');
        });
    
        this.get('#/1', function() {
          // this context is a Sammy.EventContext
         // this.redirect('#/');
            LoadTemplate('templates/page1.handlebars');
        });
    
        this.get('#/2', function() {
          // this context is a Sammy.EventContext
         // this.redirect('#/');
            LoadTemplate('templates/page2.handlebars');
        });
    
        this.get('#/3', function() {
          // this context is a Sammy.EventContext
         // this.redirect('#/');
            LoadTemplate('templates/page3.handlebars');
        });
        
        this.get('#/4', function() {
          // this context is a Sammy.EventContext
         // this.redirect('#/');
            LoadTemplate('templates/page4.handlebars');
        });
    
        this.get('#/5', function() {
          // this context is a Sammy.EventContext
         // this.redirect('#/');
            LoadTemplate('templates/page5.handlebars');
        });
    
        this.bind('previousPageEvent', function(e, data) {
          var page = e.target.baseURI.slice(-1);
         // console.log(e.target.baseURI);
          page = +page;
         // console.log(typeof page + ' ' + page);
        if (page > 1 && page <= 5) {
            page-=1;
        }
          this.redirect('#/'+page);
      });
    
        this.bind('nextPageEvent', function(e, data) {
          var page = e.target.baseURI.slice(-1);
         // console.log(e.target.baseURI);
          page = +page;
         // console.log(typeof page + ' ' + page);
         if (page >= 1 && page < 5) {
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