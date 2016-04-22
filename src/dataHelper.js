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
	    });
    },
    loadText: function(selector, obj, prop) {
        $(selector).val(obj[prop]);
    },
    loadRadio: function(selector, obj, propr) {
        $(selector+'[value='+obj[propr]+']').prop('checked', true);
    }
    
};