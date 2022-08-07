function setup() {
  canvas = createCanvas(800, 500);
}
x = 0;
y = 0;
rec = "";
cir = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start() {
  document.getElementById("status").innerHTML =
    "System is listening, please speak";
  Recognition.start();
}
Recognition.onresult = function (event) {
  console.log(event);
  var content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML =
    "The speech has been recognised as :" + content;
  if (content == "circle") {
    x = Math.floor(Math.random() * 800);
    y = Math.floor(Math.random() * 500);
    document.getElementById("status").innerHTML = "Started drawing circle";
    cir = "set";
  }
  if (content == "rectangle") {
    x = Math.floor(Math.random() * 800);
    y = Math.floor(Math.random() * 500);
    document.getElementById("status").innerHTML = "Started drawing rectangle";
    rec = "set";
  }
};
function draw() {
  if (cir == "set") {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn";
    cir = "";
  }
  if (rec == "set") {
    W = Math.floor(Math.random() * 200);
    H = Math.floor(Math.random() * 100);
    rect(x, y, W, H);
    document.getElementById("status").innerHTML = "Rectangle is drawn";
    rec = "";
  }
}
