var dataHelper = {
    saveText: function(selector, obj, prop) {
        $(selector).focusout(function() {
        obj[prop] = $(selector).val();
        }); 
    },
    saveRadio: function(selector, key, value, obj, prop) {
        $(selector).click(function(){	
        obj[prop] = $('input['+key+'='+value+']:checked').val();
        });
    },
    saveEventChange: function(selector, obj, prop) {
        $(selector).change(function(){	
            obj[prop] = $(selector).val();
           // console.log(obj[prop]);
	    });
    },
    loadText: function(selector, obj, prop) {
        $(selector).val(obj[prop]);
    },
    loadRadio: function(selector, obj, propr) {
        $(selector+'[value='+obj[propr]+']').prop('checked', true);
    }
    
};

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
        dataHelper.loadText('#education', details, 'education');
        //dataHelper.loadText('#address', details, 'address');
        /// 3
        dataHelper.loadText('#username', details, 'username');
        dataHelper.loadText('#password', details, 'password');
        dataHelper.loadText('#repassword', details, 'password');
        /// 4
        dataHelper.loadText('#phone', details, 'phone');
        dataHelper.loadText('#mail', details, 'mail');
        dataHelper.loadText('#site', details, 'site');
        /// 5
        dataHelper.loadText('#langs', details, 'languages');
        dataHelper.loadText('#hobbies', details, 'hobbies');
       
        // SAVE
        // 1
        dataHelper.saveText('#fname', details, 'firstName');
        dataHelper.saveText('#lname', details, 'lastName');
        dataHelper.saveRadio('input:radio', 'name', 'gender', details, 'gender');
        /// 2
        dataHelper.saveEventChange('#birthdate', details ,'birthdate');
        dataHelper.saveEventChange('#city', details, 'city');        dataHelper.saveEventChange('#education', details ,'education');
        /*dataHelper.saveText('#address', details, 'address');*/
        /// 3
        dataHelper.saveText('#username', details, 'username');
        dataHelper.saveText('#password', details, 'password');
        /// 4
        dataHelper.saveText('#phone', details, 'phone');
        dataHelper.saveText('#mail', details, 'mail');
        dataHelper.saveText('#site', details, 'site');
        /// 5
        dataHelper.saveText('#langs', details, 'languages');
        dataHelper.saveText('#hobbies', details,'hobbies');    
}