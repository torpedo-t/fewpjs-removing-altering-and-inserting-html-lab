// Write your code here!
// remove 'main#main', expect <main id="main"></main to not exist
// id selector #
let main = document.getElementById('main')
main.remove()

let newHeader = document.createElement("h1")
newHeader.id = "victory"
debugger
newHeader.innerHTML = "YOUR-NAME is the champion"
document.body.appendChild(newHeader)
// document.body gives us access to the body
// append newHeader after first body tag


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