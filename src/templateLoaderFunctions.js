//$(document).ready(function(){
// });

var details = {
    firstName: 'Aaaa',
    lastName: 'Bbbb',
    gender: 'male',
    birthdate: '2016-05-13',
    city: 'Sofia',
    address: 'asdasdassa',
    username: null,
    password: null,
    phone: null,
    mail: null,
    site: null,
    education: 'university',
    languages: 'EN, FR',
    hobbies: 'jogging, sleeping'
};

function Templating(source, selector, data) {
   // console.log(data);
    if (!data) {
        data = {};
    }
  //  console.log(data);
    $.get(source).then(function(source){
        var template = Handlebars.compile(source);
        var output = template(data);
        $(selector).html(output);
     //   console.log(selector);
        app.trigger('CheckPageEvent');
        SaveLoad();
        
        
    });
}

//DEL
function CompileTemplate(source, selector) {
    var template = Handlebars.compile(source);
    var output = template();
    $(selector).html(output);
}
//DEL
function LoadTemplate(templatePath) {
    return $.get(templatePath)
        .then(function(source) {
        CompileTemplate(source, '#template-output');
    
SaveLoad();
            
    });
        
    };
/*
function LoadTemplate(templatePath) {
    var source = $.get(templatePath, function(data){
    CompileTemplate(data, '#template-output');
    console.log('loaded');
    

        // PAGES DATA:
      //  console.log(details);
        // LOAD
        /// 1
        
        dataHelper.loadText('#fname', details, 'firstName');
        dataHelper.loadText('#lname', details, 'lastName');
        dataHelper.loadRadio('input:radio', details, 'gender');
        /// 2
        dataHelper.loadText('#birthdate', details, 'birthdate');
        dataHelper.loadText('#city', details, 'city');
        dataHelper.loadText('#address', details, 'address');
        /// 3
        dataHelper.loadText('#username', details, 'username');
        dataHelper.loadText('#password', details, 'password');
        dataHelper.loadText('#repassword', details, 'password');
        /// 4
        dataHelper.loadText('#phone', details ,'phone');
        dataHelper.loadText('#mail', details ,'mail');
        dataHelper.loadText('#site', details ,'site');
        /// 5
        dataHelper.loadText('#education', details, 'education');
        dataHelper.loadText('#langs', details, 'languages');
        dataHelper.loadText('#hobbies', details, 'hobbies');
        // SAVE
        // 1
        dataHelper.saveText('#fname', details ,'firstName');
     
        dataHelper.saveText('#lname', details ,'lastName');
       
        dataHelper.saveRadio('input:radio', 'name', 'gender', details, 'gender');
       
        /// 2
        dataHelper.saveEventChange('#birthdate', details ,'birthdate');
       
        dataHelper.saveEventChange('#city', details ,'city');
       
        dataHelper.saveText('#address', details ,'address');
        
        /// 3
        dataHelper.saveText('#username', details ,'username');
        dataHelper.saveText('#password', details ,'password');
        /// 4
        dataHelper.saveText('#phone', details ,'phone');
        dataHelper.saveText('#mail', details ,'mail');
        dataHelper.saveText('#site', details ,'site');
        /// 5
        dataHelper.saveEventChange('#education', details ,'education');
        dataHelper.saveText('#langs', details ,'languages');
        dataHelper.saveText('#hobbies', details ,'hobbies');
        
      //  Validator.CheckFocusOut('#val1', 'Fuck you!');
      //  Validator.CheckKeyUp('#val1');
    });
  //  console.log('2');
}
*/
// FUNCTIONS
function SaveLoad() {
    // PAGES DATA:
        // LOAD
        /// 1
        dataHelper.loadText('#fname', details, 'firstName');
        dataHelper.loadText('#lname', details, 'lastName');
        dataHelper.loadRadio('input:radio', details, 'gender');
        /// 2
        dataHelper.loadText('#birthdate', details, 'birthdate');
        dataHelper.loadText('#city', details, 'city');
        
        dataHelper.loadText('#address', details, 'address');
        /// 3
        dataHelper.loadText('#username', details, 'username');
        dataHelper.loadText('#password', details, 'password');
        dataHelper.loadText('#repassword', details, 'password');
        /// 4
        dataHelper.loadText('#phone', details, 'phone');
        dataHelper.loadText('#mail', details, 'mail');
        dataHelper.loadText('#site', details, 'site');
        /// 5
        dataHelper.loadText('#education', details, 'education');
        dataHelper.loadText('#langs', details, 'languages');
        dataHelper.loadText('#hobbies', details, 'hobbies');
       
        // SAVE
        // 1
        dataHelper.saveText('#fname', details, 'firstName');
        dataHelper.saveText('#lname', details, 'lastName');
        dataHelper.saveRadio('input:radio', 'name', 'gender', details, 'gender');
        /// 2
        dataHelper.saveEventChange('#birthdate', details ,'birthdate');
        dataHelper.saveEventChange('#city', details, 'city');
        dataHelper.saveText('#address', details, 'address');
        /// 3
        dataHelper.saveText('#username', details, 'username');
        dataHelper.saveText('#password', details, 'password');
        /// 4
        dataHelper.saveText('#phone', details, 'phone');
        dataHelper.saveText('#mail', details, 'mail');
        dataHelper.saveText('#site', details, 'site');
        /// 5
        dataHelper.saveEventChange('#education', details ,'education');
        dataHelper.saveText('#langs', details, 'languages');
        dataHelper.saveText('#hobbies', details,'hobbies');    
}

//  //// //
/*
var IDs = ['#fname', '#lname', '#birthdate', '#username','#password', '#repassword', '#mail'];
*/

/*
function FindRequiredFields(zzz) {
    var requiredFields = $('div > *').children('.Required');
}

function InitialValidation(arr) {
}
*/

/*function MakeRequired(arr) {
    $.each(arr, function(i, val){
         $(val).addClass('Required');
        console.log('done');
    });
}*/

//var detectedRequired = [];
/*
function CheckIfPageHasRequired() {
    var requiredFields = $('div > *').children('.Required');
    
    if ( requiredFields.length > 0 ) {
       $('#next').prop('disabled', true);    
    } else {
       $('#next').prop('disabled', false);         
    }
    console.log(requiredFields);
}
*/

/*
function ValidateFields(arr) {
    for(var i = 0; i<arr.length; i+=1) {
        $(arr[i]).focusout(function() {
            if ($("this").length == 0) {
                var $message = $("<span>hello world</span>");
                $('#val1').after($message);
                $message.fadeOut(2000);
            }
        });
    }
    
}*/