const btnel = document.querySelector(".btn");
const bodyel = document.querySelector("body");
var colors = ["green", "blue", "red", "orange", "yellow", "violet"];
bodyel.style.background = "pink";
btnel.addEventListener("click", addcolor);
function addcolor() {
    console.log("clicked");
    var color = parseInt(Math.random() * colors.length);
    bodyel.style.background = colors[color];
    count++;
}