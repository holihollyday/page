
var canvas;
var a;
var b;
var fontC;
var fontE;
let chinese = "张佳琪创作跨越虚拟数字空间和实体领域的互动游戏化体验。她致力于在社会认知和行为方面进行调查，尤其侧重于个人的感官知觉、情感体验和集体想象。她的工作涉及与社会科学家、教育学习专家和非人类等进行跨学科合作。";
let english = "Jiaqi creates interactive and gamified experiences across the digital and physical realms with a focus on sensory perception, emotional experience, and collective imagination. Her creative practice is based on the collaborative process and socially engaged relationship. Her previous experience involved working with learning specialists, scientists, audiences, and nonhumans.";
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  loadFont("fonts/YaqiHeiLight.ttf");
}

function setup() {
  smooth();

  canvas=createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  a=random(255);
  b=random(255);
  var c=color(a,b,250,40);
  // blendMode(SCREEN);


  let englishP = createP(english);
  englishP.style('line-height', '1.2');
  englishP.style('text-align', 'left');
  englishP.style('z-index', '-1');
  englishP.style('color', c);
  englishP.style('font-weight','0.2');
  englishP.style('text-transform','uppercase');

  let chineseP = createP(chinese);
  chineseP.style('line-height', '1.4');
  chineseP.style('text-align', 'left');
  chineseP.style('z-index', '1');
  chineseP.style('color', '#fff');

  if(windowWidth<800){
   englishP.style('font-size', '10px');
   chineseP.style('font-size', '10px');
   chineseP.position(windowWidth/4, windowHeight/2-120);
   englishP.position(windowWidth/4, windowHeight/2-80);
  }

  if(windowWidth>=800){
   chineseP.style('font-size', '55px');
   chineseP.style('margin','200px');
   chineseP.position(0,0);
   englishP.style('font-size', '60px');
   englishP.style('margin','5px');
   englishP.position(0,0);
  }

}

function draw() {
  background(a,b, 150);
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y

  blendMode(SCREEN);

  fill(255, 150);
  ellipse(x, height/2, y, y);
  erase(255,187);
  noStroke();
  fill(150, 195);
  ellipse(ix, height/2, iy, iy);
  noErase();

  fill(255, 5);
  ellipse(ix, height/2, iy, iy);

  stroke(b,150,a);
  line(x-y/2, height/2,ix-x, height/2);
  line(x-y/2, height/2,x,y);
  line(x,y,ix, height/2);
}
