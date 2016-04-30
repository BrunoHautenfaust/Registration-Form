MyRegForm.colorPicker = (function($){
   
    function PickColor(selector, arr) {
       $(selector).removeClass();
       var color = arr[Math.floor(Math.random()*arr.length)];
       $(selector).addClass(color);
    }
    
    return {
        PickColor
    }
}(jQuery));