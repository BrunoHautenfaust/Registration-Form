MyRegForm.dataHelper = (function($){
    function SaveLoad() {
    // PAGES DATA:
        // LOAD
        /// 1
        this.loadText('#fname', details, 'firstName');
        this.loadText('#lname', details, 'lastName');
        this.loadRadio('input:radio', details, 'gender');
        /// 2
        this.loadText('#birthdate', details, 'birthdate');
        this.loadText('#city', details, 'city');
        this.loadText('#education', details, 'education');
        /// 3
        this.loadText('#username', details, 'username');
        this.loadText('#password', details, 'password');
        this.loadText('#repassword', details, 'password');
        /// 4
        this.loadText('#phone', details, 'phone');
        this.loadText('#mail', details, 'mail');
        this.loadText('#site', details, 'site');
        /// 5
        this.loadText('#langs', details, 'languages');
        this.loadText('#hobbies', details, 'hobbies');
       
        // SAVE
        // 1
        this.saveText('#fname', details, 'firstName');
        this.saveText('#lname', details, 'lastName');
        this.saveRadio('input:radio', 'name', 'gender', details, 'gender');
        /// 2
        this.saveEventChange('#birthdate', details ,'birthdate');
        this.saveEventChange('#city', details, 'city');        this.saveEventChange('#education', details ,'education');
        /// 3
        this.saveText('#username', details, 'username');
        this.saveText('#password', details, 'password');
        /// 4
        this.saveText('#phone', details, 'phone');
        this.saveText('#mail', details, 'mail');
        this.saveText('#site', details, 'site');
        /// 5
        this.saveText('#langs', details, 'languages');
        this.saveText('#hobbies', details,'hobbies');    
    }
    
    function saveText(selector, obj, prop) {
        $(selector).focusout(function() {
        obj[prop] = $(selector).val();
        }); 
    }
    function saveRadio(selector, key, value, obj, prop) {
        $(selector).click(function(){	
        obj[prop] = $('input['+key+'='+value+']:checked').val();
        });
    }
    function saveEventChange(selector, obj, prop) {
        $(selector).change(function(){	
            obj[prop] = $(selector).val();
           // console.log(obj[prop]);
	    });
    }
    function loadText(selector, obj, prop) {
        $(selector).val(obj[prop]);
    }
    function loadRadio(selector, obj, propr) {
        $(selector+'[value='+obj[propr]+']').prop('checked', true);
    }
    
    return {
        saveText,
        saveRadio,
        saveEventChange,
        loadText,
        loadRadio,
        SaveLoad
    }
    
}(jQuery));

