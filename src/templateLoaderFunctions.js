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

function CompileTemplate(source, selector) {
    var template = Handlebars.compile(source);
    var output = template();
    $(selector).html(output);
}

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
        //$('#fname').val(details.firstName);
        //$('#lname').val(details.lastName);
        dataHelper.loadRadio('input:radio', details, 'gender');
        //$('input:radio[value='+details.gender+']').prop('checked', true);
        /// 2
        dataHelper.loadText('#birthdate', details, 'birthdate');
        dataHelper.loadText('#city', details, 'city');
        //$('#birthdate').val(details.birthdate);
        //$('#city').val(details.city);
        dataHelper.loadText('#address', details, 'address');
        //$('#address').val(details.address);
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
        /*
        $('#fname').keyup(function() {
       details.firstName = $('#fname').val();
    console.log(details);
     });     */  
        dataHelper.saveText('#lname', details ,'lastName');
        /*$('#lname').keyup(function() {
       details.lastName = $('#lname').val();
    console.log(details);
     });*/  
      /*  $('#gender').click(function(){	
        var a = $('input[name=gaz]:checked').val();
        alert(a);
        details.gender = a;
	});*/
        dataHelper.saveRadio('input:radio', 'name', 'gender', details, 'gender');
       /*  $('input:radio').click(function(){	
        var g = $('input[name=gender]:checked').val();
        details.gender = g;
	});*/
        /// 2
        dataHelper.saveEventChange('#birthdate', details ,'birthdate');
        /*$('#birthdate').change(function(){	
        var bd = $('#birthdate').val();
            console.log(bd);
            details.birthdate = bd;
	});*/
        dataHelper.saveEventChange('#city', details ,'city');
        /*$('#city').change(function(){	
            console.log($('#city').val());
            details.city = $('#city').val();
	});*/
        dataHelper.saveText('#address', details ,'address');
        /*$('#address').focusout(function(){	
            console.log($('#address').val());
            details.address = $('#address').val();
	});*/
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
