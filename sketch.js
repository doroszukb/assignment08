var value =0
var myImg
var myImg1
var mySong
var startList = [ 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
var p = 0;
var cnv;
var d;
var pk = [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ];
var tList = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function preload() {
  myImg = loadImage("./assets/palm.jpg");
  myImg1 = loadImage("./assets/monkey.png");
  mySong = loadSound('assets/CoconutSong.mp3');
}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
  //deviceOrientation='PORTRAIT'
for (i=0;i<20;i++) {
startList[i]=random(windowWidth/4,windowWidth*3/4);
pk[i]=0;
tList[i]=random(3.5,5)
}
cnv.mouseClicked(changeGray);
setShakeThreshold(30);
mySong.play()
 d = 10;
}

function draw() {
  
background(255);


if (windowWidth/windowHeight == 9/12) {
 image(myImg,0,0,windowWidth,windowHeight)
}

if (windowWidth/windowHeight < 9/12){
  image(myImg,0,(windowHeight-windowWidth*12/9)/2,windowWidth,windowWidth*12/9)
}

if (windowWidth/windowHeight > 9/12){
  
   image(myImg,(windowWidth-windowHeight*9/12)/2,0,windowHeight*9/12,windowHeight)
  
}
textWidth(0.1)

textSize(20)
textAlign(LEFT)

//if(value=p){
//text('shake to collect coconuts!', width/11, height/11)
//}

if(value>p){
  image(myImg1,windowWidth/30,windowHeight*3/5,windowHeight/3*10/11,windowHeight/3)
  textSize(60)
  fill(130)
  text(value, width/11, height/11+30)
} else {
  fill(230)
  text('shake to collect coconuts!', width/11, height/11)
//}
}


for (var i=0;i<value-p;i++) {
  
kokos(startList[i],i);
}
//kokos(startList[1])

//p=value




  }
  
  
  function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}

function kokos(x,y){
  
  strokeWeight(1.5)
   fill(255)
  ellipse (x,windowHeight*4/7+(frameCount-pk[y])*tList[y], 20)
   noFill()
  ellipse (x+3,3+windowHeight*4/7+(frameCount-pk[y])*tList[y], 20)
  if (3+windowHeight*4/7+(frameCount-pk[y])*tList[y]>windowHeight*1.3) {p=value;}
}

function deviceShaken() {
  value = value +1
  if (value>255){
    value = 0
  }
pk[value-p-1]=frameCount;
}
function mouseClicked()  {
   value = value +1
pk[value-p-1]=frameCount;
}
function changeGray() {
  
}
