var video = videojs('#my-video');
var myVideo = document.getElementById("my-video");
var input = document.getElementById("comment_body");
var currentTime = 0.0
var duration = 0.0
var avatarPosition = 0.0
var avatar = ''
var element = document.getElementById('textbox');

element.addEventListener("click", function(e) {
    video.pause();
    currentTime = video.currentTime();
    createElement();
}, false);

// document.addEventListener('DOMContentLoaded', function(e) {
//   avatar = $('.email').data('email');
// });

function getDuration() {
    duration = video.duration();
    return duration
}

function scaling(cTime, vDuration, lineLength) {
    avatarPosition = (cTime/vDuration) * lineLength
    return avatarPosition
}

function createElement() {
  var para = document.createElement("p");                 // Create a <p> element
  para.setAttribute("id","timestamps");
  para.innerHTML = currentTime;                // Insert text
  document.getElementById("comment_submit").appendChild(para);     // Append <p> to <div> with id="myDIV"
}

// Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     currentTime = video.currentTime();
//     pos = scaling(currentTime, duration, 650);
//     createElement();
//     // document.getElementById("xx").style.position = 'relative'
//     // document.getElementById("xx").style.left = pos + 'px'
    
//   }
// });

setTimeout(getDuration, 1000)

let player = videojs('my-video', {
  controls: true
})

