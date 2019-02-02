var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

//load images

var floor = new Image();
var piece = new Image();
var bg = new Image();

floor.src = "images/floor4.png";
piece.src = "images/piece4.png";
bg.src = "images/bg.png";


// variables
pX = 450;
pY = 1537;
right = 0;

function draw() {
  ctx.drawImage(bg,0,0);
  ctx.drawImage(floor,0, canvas.height - floor.height);
  ctx.drawImage(piece, pX, pY);





  // intervals
  requestAnimationFrame(draw,10);
  requestAnimationFrame(cl2, 10);
}


function cl2go() {
  right += 2;
}

function cl2stop() {
  right = 0;
}

function cl2() {
//  console.log("click2");
  pX += right;
}
