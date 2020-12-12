var database;

var drawing = [];
var currentPath = [];
var isDrawing = false;

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-10');
  canvas.mouseMoved(startPath);
  canvas.parent('canvascontainer');
  canvas.mousePressed(endPath);

  var saveButton = select('#saveButton');
  saveButton.mousePressed(saveDrawing);

  var config = {
    apiKey: "AIzaSyCdk7YZYvsV3pKyh4YX5C-p0-09cir-Ejg",
    authDomain: "jiaqiwsdrawing.firebaseapp.com",
    databaseURL: "https://jiaqiwsdrawing.firebaseio.com",
    projectId: "jiaqiwsdrawing",
    storageBucket: "jiaqiwsdrawing.appspot.com",
    messagingSenderId: "66148168424"
  };

  firebase.initializeApp(config);
  database = firebase.database();
}


function startPath() {
  isDrawing = true;
  currentPath = [];
  drawing.push(currentPath);
}

function endPath() {
  isDrawing = false;
}


function draw() {
  // background(255);

  if (isDrawing) {
    var point = {
      x: mouseX,
      y: mouseY,
      x1: pmouseX,
      y1: pmouseY
    }
    currentPath.push(point);
  }

  stroke(50,50);
  // noFill();
  for (var i = 0; i < drawing.length; i++) {
    var path = drawing[i];
    beginShape();
    for (var j = 0; j < path.length; j++) {
    line( path[j].x, path[j].y, path[j].x1, path[j].y1);
      //vertex(path[j].x, path[j].y);
    }
    endShape();
  }

}

// function mousePressed() {
// background(random(255),random(255),random(255),50);
//   // prevent default
//   return false;
// }

function saveDrawing() {
  var ref = database.ref('drawings');
  var data = {
    name: "Jiaqi",
    drawing: drawing
  }
  var result = ref.push(data, dataSent);
  console.log(result.key);

  function dataSent(err, status) {
    console.log(status);
  }
}





function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
