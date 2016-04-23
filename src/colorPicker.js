var colors = ['lightblue', 'lightcoral', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightsteelblue', 'beige', 'honeydew', 'lavender'];

function ColorPick(selector, arr) {
    $(selector).removeClass();
    var color = arr[Math.floor(Math.random()*arr.length)];
   $(selector).addClass(color);
   // console.log(color);
}