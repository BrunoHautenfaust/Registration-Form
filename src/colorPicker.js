colorPicker = (function(){
   
    function ColorPick(selector, arr) {
        $(selector).removeClass();
        var color = arr[Math.floor(Math.random()*arr.length)];
       $(selector).addClass(color);
        //console.log(color);
    }
    
    return {
        ColorPick
    }
}());

