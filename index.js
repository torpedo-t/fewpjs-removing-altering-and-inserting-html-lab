// Write your code here!
// remove 'main#main', expect <main id="main"></main to not exist
// id selector #
var main = document.getElementById('main');
main.remove();

var newHeader = document.createElement("h1#victory");
// document.body.onload = addElement;

// function addElement() {
//     var newHeader = document.createElement("h1#victory");
    
//     var newContent = document.createTextNode("YOUR-NAME is the champion");

//     newHeader.appendChild(newContent);

//     const currentBody = document.getElementById("body");
//     document.body.insertBefore(newHeader, currentBody);
// }


// 'newheader' variable that points to node 'h1#victory'
// header with id victory
// contains text "YOUR-NAME is the champion"