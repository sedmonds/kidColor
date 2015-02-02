var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

// Window properties, return the width and beight of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Revised constructor to set properties. Program breaks.
function Box (options) {
  this.x = options.x || 10;
  this.y = options.y || 10;
  this.width = options.height || 100;
  this.height = options.height || 100;
  this.color = options.color ||  '#000000';
}

var boxes = [];
var drawing = false;
var boxSize = 10;

document.addEventListener('mousedown', function (e) {
  drawing = true;
});

document.addEventListener('mouseup', function (e) {
 drawing = false;
});

document.addEventListener('mousemove', function (e) {
  if (drawing === true) {
    boxes[boxes.length] = new Box({
      x: e.clientX - boxSize/2,
      y: e.clientY - boxSize/2,
      width: boxSize,
      height: boxSize,
      color: randomColor(100, 255, 0, 0, 0, 255, 0.5)
    });
  }
});

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  boxes.forEach(function(box, i) {
    context.fillStyle = box.color; 
    context.fillRect(box.x,box.y, box.width, box.height);
  });
}

function update() {


}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}

function randomColor(rmin, rmax, gmin, gmax, bmin, bmax, alpha) {
  var r = randomNumber(rmin, rmax);
  var g = randomNumber(gmin, gmax);
  var b = randomNumber(bmin, bmax);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
}

function loop() {
  update();
  draw();
  window.requestAnimationFrame(loop);
}

loop();

