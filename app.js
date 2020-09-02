// function makeBold() {
//     headerElement.style.fontWeight = "bold";
// }

var headerElement = document.getElementById("header");
headerElement.addEventListener("click", function() {
    document.getElementById("header").innerHTML = '<img width="250" height="150" src="https://i.ytimg.com/vi/3XcGpCw1w5k/maxresdefault.jpg" alt="">';
});

var headerElement2 = document.getElementById("header2");
headerElement2.addEventListener("mouseover", function() {
    headerElement2.style.fontFamily = "Impact";
    headerElement2.style.color = "red";
    document.getElementById("header2").innerHTML = "WOW  it's  RED!"
});

// var headerElement3 = document.getElementById("header3");
// headerElement3.addEventListener('keypress', function(eventDetails) {
//     if(eventDetails.key == " ") {
//         headerElement3.style.backgroundColor = "red";
//     }
// })

// var headerElement3 = document.getElementById("header3");
// headerElement3.addEventListener('keypress', function(eventDetails) {
//     if(eventDetails.key == " ") {
//         console.log(eventDetails)
//         headerElement3.style.backgroundColor = "green";
//     }
// });

var bodyElement = document.getElementById("body");
bodyElement.addEventListener('keypress', function(eventDetails) {        // "keydown"/"keypress" a key on keyboard has been pressed
    if(eventDetails.key == " ") {
        bodyElement.style.textAlign = "center";
    }
});