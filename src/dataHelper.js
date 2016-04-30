MyRegForm.dataHelper = (function($, d){
    function SaveLoad() {
    // PAGES DATA:
        // LOAD
        /// 1
        this.loadText('#fname', d, 'firstName');
        this.loadText('#lname', d, 'lastName');
        this.loadRadio('input:radio', d, 'gender');
        /// 2
        this.loadText('#birthdate', d, 'birthdate');
        this.loadText('#city', d, 'city');
        this.loadText('#education', d, 'education');
        /// 3
        this.loadText('#username', d, 'username');
        this.loadText('#password', d, 'password');
        this.loadText('#repassword', d, 'password');
        /// 4
        this.loadText('#phone', d, 'phone');
        this.loadText('#mail', d, 'mail');
        this.loadText('#site', d, 'site');
        /// 5
        this.loadText('#langs', d, 'languages');
        this.loadText('#hobbies', d, 'hobbies');
       
        // SAVE
        // 1
        this.saveText('#fname', d, 'firstName');
        this.saveText('#lname', d, 'lastName');
        this.saveRadio('input:radio', 'name', 'gender', d, 'gender');
        /// 2
        this.saveEventChange('#birthdate', d ,'birthdate');
        this.saveEventChange('#city', d, 'city');        this.saveEventChange('#education', d ,'education');
        /// 3
        this.saveText('#username', d, 'username');
        this.saveText('#password', d, 'password');
        /// 4
        this.saveText('#phone', d, 'phone');
        this.saveText('#mail', d, 'mail');
        this.saveText('#site', d, 'site');
        /// 5
        this.saveText('#langs', d, 'languages');
        this.saveText('#hobbies', d,'hobbies');    
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
    
}(jQuery, MyRegForm.details));

